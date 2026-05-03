import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Clock, MapPin, Calendar, User, Sparkles, Loader2, ArrowRight, Languages } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import Header from '../components/Header';
import SEO from '../components/SEO';

interface PanchangData {
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  rashi: string;
  rashiInsight: string;
}

export default function Horoscope() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    place: '',
    focus: 'general',
    language: 'English'
  });
  
  const [loading, setLoading] = useState(false);
  const [reading, setReading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [panchang, setPanchang] = useState<PanchangData | null>(null);
  const [loadingPanchang, setLoadingPanchang] = useState(false);
  
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reading && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [reading]);

  useEffect(() => {
    const fetchPanchang = async () => {
      setLoadingPanchang(true);
      try {
        if (!process.env.GEMINI_API_KEY) return;
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const prompt = `Provide today's Vedic Panchang and Moon's current Rashi for ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. 
Return the response ONLY as a valid JSON object with the following structure:
{
  "tithi": "...",
  "nakshatra": "...",
  "yoga": "...",
  "karana": "...",
  "rashi": "...",
  "rashiInsight": "1-sentence general insight for the Moon's current Rashi"
}
Do not include any markdown formatting like \`\`\`json or \`\`\`. Just output the raw JSON object.`;
        
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: prompt,
        });

        if (response.text) {
          try {
            const cleanJson = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsedData = JSON.parse(cleanJson);
            setPanchang(parsedData);
          } catch (e) {
            console.error("Failed to parse Panchang JSON:", e);
          }
        }
      } catch (err) {
        console.error("Panchang generation error:", err);
      } finally {
        setLoadingPanchang(false);
      }
    };
    
    fetchPanchang();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Personalized Vedic Horoscope Reading | Astrologer Mannu Shastri Ji",
    "description": "Get a free, instant personalized Vedic astrology reading based on your exact birth details.",
    "url": "https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/horoscope"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.dob || !formData.place) {
      setError("Please fill in at least your name, date of birth, and place of birth.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setReading(null);

    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("API configuration is missing. Cannot generate reading at this time.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `
You are speaking as Astrologer Mannu Shastri Ji, a highly respected and experienced Vedic astrologer from India with 35+ years of practice, specializing in relationship and life problem solutions. 

A client has requested a quick personalized Vedic astrology assessment.
Here are their birth details:
- Name: ${formData.name}
- Date of Birth: ${formData.dob}
- Time of Birth: ${formData.tob || 'Unknown time'}
- Place of Birth: ${formData.place}
- Area of Focus: ${formData.focus}
- Preferred Language: ${formData.language}
- Current Date of Reading: ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

Please provide an insightful, empathetic, and encouraging reading (around 400-500 words).
IMPORTANT: You MUST write the ENTIRE reading in the specified language: "${formData.language}". Do NOT use English if Hindi or Roman Hindi (Hinglish) is selected.
Structure the response with clear headings (translated to the chosen language if applicable):
1. **Today's Panchang & Your Rashi (Aaj ki Tithi aur Rashi)**: Start by clearly stating today's current Vedic Tithi (Lunar day) and the user's Rashi (Moon Sign/Zodiac) deduced from their birth details.
2. **Astrological Profile**: Briefly assess what their basic chart implies (be insightful and mystical but positive).
3. **Current Life Phase & Daily Insight (Today's Transits)**: Provide insights into what cosmic energies they are currently navigating, specifically focusing on how today's planetary transits will affect their day. Make it feel like a fresh daily update.
4. **Focus Insight (${formData.focus})**: Give direct guidance related to their selected area of focus.
5. **Remedial Guidance**: Suggest 1-2 simple, practical Vedic remedies for today/current phase.

Maintain a warm, reassuring, and professional tone. Make them feel understood. Use Markdown for formatting.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      if (response.text) {
        setReading(response.text);
      } else {
        throw new Error("Failed to generate reading. Please try again.");
      }
    } catch (err: any) {
      console.error("Horoscope generation error:", err);
      setError(err.message || "An error occurred while generating your horoscope. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans selection:bg-orange-500/30">
      <SEO 
        title="Free Vedic Horoscope Reading | Astrologer Mannu Shastri Ji"
        description="Get an instant personalized Vedic horoscope reading by providing your birth details. Discover insights into your love life, career, and future."
        keywords="free horoscope, vedic astrology reading, online kundli, love horoscope, career astrology, future prediction"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/horoscope"
        structuredData={structuredData}
      />
      
      <Header activePage="horoscope" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 pb-24 md:pb-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 rounded-full mb-6 relative group">
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full group-hover:bg-orange-500/30 transition-all duration-500"></div>
            <Sparkles className="w-8 h-8 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-6">
            Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Daily Free Horoscope</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Enter your birth details below to receive a personalized, AI-powered Vedic astrology reading for today. Come back every day for a fresh daily update from the wisdom of Astrologer Mannu Shastri Ji.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form */}
          <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-500" />
              Birth Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all"
                  required
                />
              </div>

              {/* Date of Birth & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="dob" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date of Birth
                  </label>
                  <input 
                    type="date" 
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all min-h-[50px] [color-scheme:dark]"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="tob" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Time of Birth
                  </label>
                  <input 
                    type="time" 
                    id="tob"
                    name="tob"
                    value={formData.tob}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all min-h-[50px] [color-scheme:dark]"
                  />
                  <p className="text-[10px] text-zinc-500 px-1">Optional, but recommended</p>
                </div>
              </div>

              {/* Place of Birth */}
              <div className="space-y-1.5">
                <label htmlFor="place" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Place of Birth
                </label>
                <input 
                  type="text" 
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="City, State, Country"
                  className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all"
                  required
                />
              </div>

              {/* Language Preference */}
              <div className="space-y-1.5">
                <label htmlFor="language" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <Languages className="w-4 h-4" /> Language
                </label>
                <select 
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all appearance-none"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Roman Hindi (Hinglish)">Roman Hindi (Hinglish)</option>
                </select>
              </div>

              {/* Primary Focus */}
              <div className="space-y-1.5">
                <label htmlFor="focus" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Focus Area
                </label>
                <select 
                  id="focus"
                  name="focus"
                  value={formData.focus}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all appearance-none"
                >
                  <option value="general">General Overview</option>
                  <option value="love and relationships">Love & Relationships</option>
                  <option value="marriage and compatibility">Marriage Prospects</option>
                  <option value="career and finance">Career & Finance</option>
                  <option value="health and well-being">Health & Well-being</option>
                </select>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-orange-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Consulting the Stars...
                  </>
                ) : (
                  <>
                    Generate My Reading
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Area */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[500px]" ref={resultRef}>
            
            {!reading && !loading && (
              <div className="flex-1 border border-zinc-800 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-zinc-900/20 h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-700" />
                </div>
                <h3 className="text-xl font-serif text-zinc-400 mb-2">Awaiting the Cosmos</h3>
                <p className="text-zinc-500 max-w-sm mb-10">
                  Fill out the form on the left to reveal the astrological insights mapped to your exact birth coordinates.
                </p>

                {/* Daily Panchang Widget */}
                <div className="w-full max-w-md bg-black/40 border border-orange-500/10 rounded-2xl p-6 text-left shadow-lg">
                  <h4 className="text-lg font-serif text-orange-400 mb-4 flex items-center gap-2 border-b border-orange-500/10 pb-3">
                    <Calendar className="w-5 h-5" /> Today's Panchang & Rashi
                  </h4>
                  {loadingPanchang ? (
                    <div className="flex items-center gap-3 text-zinc-500 text-sm py-4">
                      <Loader2 className="w-4 h-4 animate-spin" /> Fetching today's planetary positions...
                    </div>
                  ) : panchang ? (
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                          <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Tithi</span>
                          <span className="text-sm font-medium text-zinc-200">{panchang.tithi}</span>
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                          <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Nakshatra</span>
                          <span className="text-sm font-medium text-zinc-200">{panchang.nakshatra}</span>
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                          <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Yoga</span>
                          <span className="text-sm font-medium text-zinc-200">{panchang.yoga}</span>
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800">
                          <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Karana</span>
                          <span className="text-sm font-medium text-zinc-200">{panchang.karana}</span>
                        </div>
                      </div>
                      
                      <div className="bg-orange-500/5 rounded-xl p-4 border border-orange-500/20 mt-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-orange-400" />
                          <span className="font-serif text-lg text-orange-300">Moon in {panchang.rashi}</span>
                        </div>
                        <p className="text-base text-zinc-300 leading-relaxed">
                          {panchang.rashiInsight}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-zinc-500">Panchang data currently unavailable.</p>
                  )}
                </div>
              </div>
            )}

            {loading && (
              <div className="flex-1 border border-orange-500/20 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-zinc-900/40 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                <div className="w-24 h-24 relative mb-8">
                  <div className="absolute inset-0 border-t-2 border-orange-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-r-2 border-amber-400 rounded-full animate-spin animation-delay-200" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-4 border-b-2 border-yellow-300 rounded-full animate-spin animation-delay-400"></div>
                  <Star className="w-6 h-6 text-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Reading Planetary Alignments...</h3>
                <p className="text-zinc-400 max-w-md animate-pulse">
                  Analyzing Nakshatras, calculating Dasha cycles, and charting the course of your stars. Step into the cosmic light.
                </p>
              </div>
            )}

            {reading && !loading && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black border border-orange-500/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl shadow-orange-900/10"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
                
                <div className="mb-8 border-b border-zinc-800 pb-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">Cosmic Blueprint for {formData.name}</h3>
                      <p className="text-sm text-zinc-400 flex flex-wrap gap-x-4 gap-y-2">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {formData.dob || 'Unknown Date'}</span>
                        {formData.tob && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {formData.tob}</span>}
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {formData.place || 'Unknown Place'}</span>
                      </p>
                    </div>
                    <div className="shrink-0 bg-orange-500/20 p-3 rounded-full">
                      <Sparkles className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert prose-orange max-w-none text-zinc-300 relative z-10
                  prose-headings:font-serif prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:leading-relaxed prose-a:text-orange-400 hover:prose-a:text-orange-300
                  prose-strong:text-zinc-100 prose-ul:my-4 prose-li:my-1"
                >
                  <ReactMarkdown>{reading}</ReactMarkdown>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-800 text-center">
                  <p className="text-sm text-zinc-500 mb-6 italic">
                    This is an AI-generated reading for guidance purposes. For profound karmic issues and customized 100% accurate remedies, consulting Astrologer Mannu Shastri Ji directly is highly recommended.
                  </p>
                  <a 
                    href="https://wa.me/919928433259?text=I%20got%20my%20free%20horoscope.%20I%20want%20to%20discuss%20my%20reading%20further." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    Consult for Deeper Analysis on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}

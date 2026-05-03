import fs from 'fs';

const content = `import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Star, Calendar, Languages, Loader2, ArrowRight, User, MapPin, Clock, MessageCircle, Quote } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import PromoPopup from '../components/PromoPopup';
import LiveActivity from '../components/LiveActivity';

const zodiacSigns = [
  { value: 'Aries', label: 'Aries (Mesh)', hindi: 'मेष', roman: 'Mesh' },
  { value: 'Taurus', label: 'Taurus (Vrishabha)', hindi: 'वृषभ', roman: 'Vrishabha' },
  { value: 'Gemini', label: 'Gemini (Mithun)', hindi: 'मिथुन', roman: 'Mithun' },
  { value: 'Cancer', label: 'Cancer (Karka)', hindi: 'कर्क', roman: 'Kark' },
  { value: 'Leo', label: 'Leo (Simha)', hindi: 'सिंह', roman: 'Simha' },
  { value: 'Virgo', label: 'Virgo (Kanya)', hindi: 'कन्या', roman: 'Kanya' },
  { value: 'Libra', label: 'Libra (Tula)', hindi: 'तुला', roman: 'Tula' },
  { value: 'Scorpio', label: 'Scorpio (Vrishchika)', hindi: 'वृश्चिक', roman: 'Vrishchika' },
  { value: 'Sagittarius', label: 'Sagittarius (Dhanu)', hindi: 'धनु', roman: 'Dhanu' },
  { value: 'Capricorn', label: 'Capricorn (Makar)', hindi: 'मकर', roman: 'Makar' },
  { value: 'Aquarius', label: 'Aquarius (Kumbh)', hindi: 'कुंभ', roman: 'Kumbh' },
  { value: 'Pisces', label: 'Pisces (Meen)', hindi: 'मीन', roman: 'Meen' }
];

const readings = {
  English: [
    "Today brings new opportunities for growth. Financially, you will see a positive shift. Keep a balanced diet to maintain health and ensure you get enough rest.",
    "Your hard work is finally paying off. Relationships will bring you joy and peace today. Avoid overthinking and stay grounded to make the best decisions.",
    "A wonderful day for creative endeavors. You might receive some unexpected good news regarding your career. Health looks stable, but remember to stay hydrated.",
    "Be cautious in your communication today to avoid misunderstandings. Progress in your profession is visible. Spend quality time with family to recharge your mental energy.",
    "Expect a surge of positive energy today. Monetary gains are highly likely from past investments. It's a great day to start a new fitness routine or spiritual practice."
  ],
  Hindi: [
    "आज आपके लिए विकास के नए अवसर लेकर आया है। आर्थिक रूप से सकारात्मक बदलाव देखने को मिलेगा। स्वास्थ्य बनाए रखने के लिए संतुलित आहार लें और पर्याप्त आराम करें।",
    "आपकी मेहनत आखिरकार रंग ला रही है। आज रिश्तों में खुशी और शांति मिलेगी। ज्यादा सोचने से बचें और बेहतर निर्णय लेने के लिए जमीन से जुड़े रहें।",
    "रचनात्मक कार्यों के लिए यह एक शानदार दिन ক্ষমতায় है। आपको अपने करियर के संबंध में कोई अप्रत्याशित शुभ समाचार मिल सकता है। स्वास्थ्य स्थिर है, लेकिन हाइड्रेटेड रहना न भूलें।",
    "गलतफहमियों से बचने के लिए आज बातचीत में सावधानी बरतें। आपके पेशे में प्रगति दिख रही है। अपनी मानसिक ऊर्जा को रिचार्ज करने के लिए परिवार के साथ गुणवत्तापूर्ण समय बिताएं।",
    "आज सकारात्मक ऊर्जा के संचार की अपेक्षा करें। पिछले निवेशों से धन लाभ होने की अत्यधिक संभावना है। नई फिटनेस दिनचर्या या आध्यात्मिक अभ्यास शुरू करने के लिए यह एक अच्छा दिन है।"
  ],
  'Roman Hindi (Hinglish)': [
    "Aaj ka din aapke liye development ke naye opportunities laayega. Financially, positive changes dekhe jayenge. Health maintain karne ke liye balanced diet len aur aaram karein.",
    "Aapki mehnat aakhirkaar rang la rahi hai. Relationships mein aaj khushiyan aur shanti naseeb hogi. Jyada overthink na karein aur best decisions lene ke liye shaant rahein.",
    "Creative kaam ke liye aaj ka din bohot badhiya hai. Career ke mamle mein unexpected good news mil sakti hai. Health stable rahegi, bas hydrated rehna na bhoolein.",
    "Misunderstandings se bachne ke liye aaj communication mein dhyan rakhein. Profession mein progress dikh rahi hai. Mental energy recharge karne ke liye family ke saath quality time spend karein.",
    "Aaj positive energy ka flow kaafi accha rahega. Past investments se monetary gains hone ke pure chances hain. Naya fitness routine ya spiritual practice start karne ke liye acha din hai."
  ]
};

const luckyColors = ["Red", "Blue", "Green", "Yellow", "Orange", "White", "Pink", "Purple", "Brown", "Gold"];
const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 33];

const generateRashifalData = (rashiValue: string, language: string) => {
  const rashi = zodiacSigns.find(z => z.value === rashiValue) || zodiacSigns[0];
  const date = new Date();
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  
  const rashiIndex = zodiacSigns.findIndex(z => z.value === rashiValue);
  
  const readingTarget = (rashiIndex + dayOfYear) % 5;
  const colorTarget = (rashiIndex + dayOfYear) % luckyColors.length;
  const numberTarget = (rashiIndex + dayOfYear) % luckyNumbers.length;
  
  let content = "";
  let heading = "";
  let colorLabel = "Lucky Color";
  let numberLabel = "Lucky Number";
  
  if (language === "Hindi") {
    heading = \`आज का \${rashi.hindi} राशिफल\`;
    content = readings.Hindi[readingTarget];
    colorLabel = "शुभ रंग";
    numberLabel = "शुभ अंक";
  } else if (language === "Roman Hindi (Hinglish)") {
    heading = \`Aaj Ka \${rashi.roman} Rashifal\`;
    content = readings['Roman Hindi (Hinglish)'][readingTarget];
    colorLabel = "Lucky Color";
    numberLabel = "Lucky Number";
  } else {
    heading = \`Today's \${rashi.value} Horoscope\`;
    content = readings.English[readingTarget];
  }
  
  return {
    heading,
    content,
    luckyColor: luckyColors[colorTarget],
    luckyNumber: luckyNumbers[numberTarget],
    rashiLabel: rashi.label,
    colorLabel,
    numberLabel
  };
};

const generateKundli = (data: { name: string, dob: string, tob: string, place: string }, lang: string) => {
  const { name } = data;

  const messages = {
    'English': [
      \`\${name}, today brings positive energy in your life. You may see improvement in career and relationships. Stay calm and trust your decisions.\`,
      \`The planetary alignments present a unique opportunity for you, \${name}. Financial stability is indicated today. Keep a balanced perspective.\`,
      \`A wave of inspiration surrounds you, \${name}. It is an excellent day to focus on personal goals and cherish moments with loved ones.\`
    ],
    'Hindi': [
      \`\${name}, आज का दिन आपके लिए शुभ ऊर्जा लाता है। करियर और संबंधों में सुधार होगा। शांत रहें और अपने फैसलों पर विश्वास रखें।\`,
      \`ग्रहों की स्थिति आपके लिए अनुकूल है, \${name}। आज वित्तीय स्थिरता के संकेत हैं। अपने दृष्टिकोण को संतुलित रखें।\`,
      \`\${name}, आज आप प्रेरणा से भरे रहेंगे। व्यक्तिगत लक्ष्यों पर ध्यान केंद्रित करने और प्रियजनों के साथ समय बिताने का यह एक शानदार दिन है।\`
    ],
    'Roman Hindi (Hinglish)': [
      \`\${name}, aaj ka din aapke liye positive energy la raha hai. Career aur relationship me improvement hoga. Calm raho aur apne decisions par trust karo.\`,
      \`Planetary alignments aapke liye unique opportunity bana rahe hain, \${name}. Financial stability aaj dikh rahi hai. Balanced perspective rakhein.\`,
      \`Ek acchi inspiration aapke aaspas hai, \${name}. Personal goals par focus karne aur loved ones ke sath time spend karne ka ye acha din hai.\`
    ]
  };

  const targetLang = messages[lang as keyof typeof messages] ? lang : 'English';
  const randomIndex = Math.floor(Math.random() * 3);
  return messages[targetLang as keyof typeof messages][randomIndex];
};

export default function Home() {
  const [formData, setFormData] = useState({
    rashi: 'Aries',
    language: 'English'
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof generateRashifalData> | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);
  const rashifalSectionRef = useRef<HTMLDivElement>(null);

  // Personal Kundli State
  const [kundliFormData, setKundliFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    place: '',
    language: 'English'
  });
  
  const [kundliLoading, setKundliLoading] = useState(false);
  const [kundliResult, setKundliResult] = useState<string | null>(null);
  const [kundliError, setKundliError] = useState<string | null>(null);

  const kundliResultRef = useRef<HTMLDivElement>(null);
  const kundliSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  useEffect(() => {
    if (kundliResult && kundliResultRef.current) {
      kundliResultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [kundliResult]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKundliInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setKundliFormData(prev => ({ ...prev, [name]: value }));
    if (kundliError) setKundliError(null);
  };

  const handleKundliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kundliFormData.name || !kundliFormData.dob || !kundliFormData.place) {
      setKundliError("Please fill all details");
      return;
    }

    setKundliLoading(true);
    setKundliResult(null);
    setKundliError(null);

    setTimeout(() => {
      const generated = generateKundli(kundliFormData, kundliFormData.language);
      setKundliResult(generated);
      setKundliLoading(false);
    }, 1500); // reduced for instant feel
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const generated = generateRashifalData(formData.rashi, formData.language);
      setResult(generated);
      setLoading(false);
    }, 1500); // reduced for instant feel
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SpiritualService",
    "name": "Astrologer Mannu Shastri Ji",
    "image": "https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg",
    "description": "Expert guidance and solutions for love, marriage, and relationship problems.",
    "telephone": "+919928433259",
    "priceRange": "$$"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden selection:bg-orange-500/30">
      <SEO 
        title="Astrology & Horoscope Reading | Mannu Shastri Ji"
        description="Check your daily rashifal or get a personal horoscope reading instantly for accurate life guidance."
        keywords="astrology, daily rashifal, personal reading, kundli, problem solution"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app"
        structuredData={structuredData}
      />
      <PromoPopup />
      <LiveActivity />
      <Header activePage="home" />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col gap-12 pb-24 md:pb-16 pt-8">
        
        {/* ======================================== 
            1. HERO SECTION 
            ======================================== */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden flex flex-col items-center shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 rounded-full mb-6 relative z-10 border border-orange-500/20">
            <Star className="w-6 h-6 text-orange-500" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-white relative z-10 max-w-4xl">
            Get Accurate Love & Life Guidance Instantly
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
            Check your daily rashifal or get personal horoscope reading
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-xl mx-auto">
            <button 
              onClick={() => scrollToSection(rashifalSectionRef)}
              className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20"
            >
              Check Today's Rashifal
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection(kundliSectionRef)}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <User className="w-5 h-5" />
              Get Personal Reading
            </button>
          </div>
        </motion.section>

        {/* ======================================== 
            2. DAILY RASHIFAL 
            ======================================== */}
        <div ref={rashifalSectionRef} className="pt-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-bold leading-tight mb-3">
              Daily Rashifal
            </h2>
            <p className="text-zinc-400">Discover what stars have aligned for you today.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">
            
            {/* Input Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="rashi" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <Star className="w-4 h-4" /> Zodiac Sign (Rashi)
                  </label>
                  <select 
                    id="rashi" name="rashi" value={formData.rashi} onChange={handleInputChange}
                    className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3.5 outline-none text-zinc-200 transition-all appearance-none cursor-pointer"
                  >
                    {zodiacSigns.map(sign => (
                      <option key={sign.value} value={sign.value}>{sign.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="language" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <Languages className="w-4 h-4" /> Language
                  </label>
                  <select 
                    id="language" name="language" value={formData.language} onChange={handleInputChange}
                    className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3.5 outline-none text-zinc-200 transition-all appearance-none cursor-pointer"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="Roman Hindi (Hinglish)">Roman Hindi (Hinglish)</option>
                  </select>
                </div>

                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Read My Fortune"}
                </button>
              </form>
            </div>

            {/* Result Area */}
            <div className="flex flex-col h-full" ref={resultRef}>
              <AnimatePresence mode="wait">
                {!result && !loading && (
                  <motion.div key="empty" className="h-full border border-zinc-800 border-dashed rounded-2xl flex flex-col items-center justify-center p-6 text-center bg-zinc-900/50 min-h-[250px]">
                    <h3 className="text-lg font-serif text-zinc-400 mb-2">Instant Reading</h3>
                    <p className="text-zinc-500 text-sm">Select sign and language to instantly open today's reading.</p>
                  </motion.div>
                )}

                {loading && (
                  <motion.div key="loading" className="h-full border border-orange-500/20 rounded-2xl flex flex-col items-center justify-center p-6 text-center bg-zinc-900/50 min-h-[250px]">
                    <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-3" />
                    <p className="text-sm text-zinc-400 animate-pulse">Reading alignments...</p>
                  </motion.div>
                )}

                {result && !loading && (
                  <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full bg-zinc-900 border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center min-h-[250px]">
                     <h3 className="text-xl font-serif text-white font-bold mb-3">{result.heading}</h3>
                     <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-4">{result.content}</p>
                     <div className="flex gap-4 mt-auto pt-4 border-t border-zinc-800">
                        <div className="flex-1">
                          <span className="block text-xs text-zinc-500">{result.colorLabel}</span>
                          <span className="text-sm font-bold text-white capitalize">{result.luckyColor}</span>
                        </div>
                        <div className="flex-1 border-l border-zinc-800 pl-4">
                          <span className="block text-xs text-zinc-500">{result.numberLabel}</span>
                          <span className="text-sm font-bold text-white max-w-full truncate">{result.luckyNumber}</span>
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ======================================== 
            3. PERSONAL KUNDLI FORM 
            ======================================== */}
        <div ref={kundliSectionRef} className="pt-8 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-bold leading-tight mb-3">
              Personal Kundli Reading
            </h2>
            <p className="text-zinc-400">Get deep insights tailored exactly to your birth details.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
            
            <form onSubmit={handleKundliSubmit} className="flex-1 space-y-5">
              <div className="space-y-4">
                <input type="text" name="name" value={kundliFormData.name} onChange={handleKundliInputChange} placeholder="Full Name" className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all font-medium" required />
                
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" name="dob" value={kundliFormData.dob} onChange={handleKundliInputChange} className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all [color-scheme:dark]" required />
                  <input type="time" name="tob" value={kundliFormData.tob} onChange={handleKundliInputChange} className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all [color-scheme:dark]" />
                </div>
                
                <input type="text" name="place" value={kundliFormData.place} onChange={handleKundliInputChange} placeholder="Place of Birth (City/Country)" className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all font-medium" required />
                
                <select name="language" value={kundliFormData.language} onChange={handleKundliInputChange} className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all appearance-none cursor-pointer">
                  <option value="English">Reading Language: English</option>
                  <option value="Hindi">Reading Language: Hindi</option>
                  <option value="Roman Hindi (Hinglish)">Reading Language: Hinglish</option>
                </select>
              </div>

              {kundliError && <p className="text-red-400 text-sm mt-2">{kundliError}</p>}
              
              <button type="submit" disabled={kundliLoading} className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all font-sans text-lg flex items-center justify-center gap-2">
                {kundliLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Generate My Reading"}
              </button>
            </form>

            <div className="flex-1 flex flex-col" ref={kundliResultRef}>
              <AnimatePresence mode="wait">
                {!kundliResult && !kundliLoading && (
                  <motion.div key="empty" className="h-full border border-zinc-800 border-dashed rounded-2xl flex flex-col items-center justify-center p-6 text-center text-zinc-500 min-h-[250px]">
                    Result will appear here instantly.
                  </motion.div>
                )}
                {kundliLoading && (
                  <motion.div key="loading" className="h-full flex flex-col items-center justify-center text-center text-zinc-500 min-h-[250px] bg-zinc-900/50 rounded-2xl border border-zinc-800">
                    <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-3" />
                    Generating...
                  </motion.div>
                )}
                {kundliResult && !kundliLoading && (
                  <motion.div key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full bg-zinc-950 border border-orange-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-center relative min-h-[250px] shadow-2xl">
                    <h3 className="text-lg font-bold text-white mb-2 pb-2 border-b border-zinc-800">Your Reading, {kundliFormData.name}</h3>
                    <p className="text-zinc-300 text-lg md:text-xl font-serif italic py-4 leading-relaxed tracking-wide">
                      "{kundliResult}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>

        {/* ======================================== 
            4. WHATSAPP CTA 
            ======================================== */}
        <motion.section 
          whileHover={{ scale: 1.01 }}
          className="mt-8 bg-gradient-to-br from-green-950/40 to-zinc-900 border border-[#25D366]/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 relative z-10">
            Need deeper solution?
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto relative z-10">
            Talk directly with our experienced astrologer on WhatsApp for immediate and personalized guidance to your problems.
          </p>
          
          <a 
            href="https://wa.me/919928433259?text=Hello,%20I%20need%20a%20solution%20for%20my%20problem."
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 text-lg z-10 relative"
          >
            <MessageCircle className="w-6 h-6" />
            Chat Now
          </a>
        </motion.section>

        {/* ======================================== 
            5. TESTIMONIALS 
            ======================================== */}
        <div className="pt-8 mb-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-white font-bold">
              Real Client Experiences
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col">
              <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
              <p className="text-zinc-300 text-sm md:text-base mb-6 flex-grow italic">
                "Accurate readings and genuine solutions. After 2 years of struggling, my problems were finally resolved. Highly recommended for accurate advice."
              </p>
              <div>
                <p className="text-white font-bold text-sm">Rohit S.</p>
                <p className="text-zinc-500 text-xs">Delhi</p>
              </div>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl pointer-events-none"></div>
              <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
              <p className="text-zinc-300 text-sm md:text-base mb-6 flex-grow italic">
                "Simple remedies that actually work. I consulted on WhatsApp and got immediate clarity regarding my marriage issues. Very trustworthy."
              </p>
              <div>
                <p className="text-white font-bold text-sm">Meera K.</p>
                <p className="text-zinc-500 text-xs">Mumbai</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex flex-col">
              <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
              <p className="text-zinc-300 text-sm md:text-base mb-6 flex-grow italic">
                "Very direct and honest guidance. No fake promises. The reading gave me the exact reason why my work was stalled, and the solution cleared it."
              </p>
              <div>
                <p className="text-white font-bold text-sm">Amit P.</p>
                <p className="text-zinc-500 text-xs">Pune</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* ======================================== 
          9. FOOTER 
          ======================================== */}
      <footer className="border-t border-zinc-800 py-6 mt-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-zinc-400">
            <span className="cursor-pointer hover:text-white transition-colors">About</span>
            <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
            <span className="cursor-pointer hover:text-white transition-colors">Disclaimer</span>
          </div>
          <p className="text-xs text-zinc-600 text-center md:text-right max-w-md">
            Disclaimer: Consultations are based on Vedic astrology. Results vary per individual.
          </p>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA (Optional but good for conversion) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919928433259?text=Hello"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Home.tsx', content);

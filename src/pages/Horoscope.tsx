import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Calendar, Languages, Loader2, ArrowRight, User, MapPin, Clock } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';

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
    "रचनात्मक कार्यों के लिए यह एक शानदार दिन है। आपको अपने करियर के संबंध में कोई अप्रत्याशित शुभ समाचार मिल सकता है। स्वास्थ्य स्थिर है, लेकिन हाइड्रेटेड रहना न भूलें।",
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
    heading = `आज का ${rashi.hindi} राशिफल`;
    content = readings.Hindi[readingTarget];
    colorLabel = "शुभ रंग";
    numberLabel = "शुभ अंक";
  } else if (language === "Roman Hindi (Hinglish)") {
    heading = `Aaj Ka ${rashi.roman} Rashifal`;
    content = readings['Roman Hindi (Hinglish)'][readingTarget];
    colorLabel = "Lucky Color";
    numberLabel = "Lucky Number";
  } else {
    heading = `Today's ${rashi.value} Horoscope`;
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
      `${name}, today brings positive energy in your life. You may see improvement in career and relationships. Stay calm and trust your decisions.`,
      `The planetary alignments present a unique opportunity for you, ${name}. Financial stability is indicated today. Keep a balanced perspective.`,
      `A wave of inspiration surrounds you, ${name}. It is an excellent day to focus on personal goals and cherish moments with loved ones.`
    ],
    'Hindi': [
      `${name}, आज का दिन आपके लिए शुभ ऊर्जा लाता है। करियर और संबंधों में सुधार होगा। शांत रहें और अपने फैसलों पर विश्वास रखें।`,
      `ग्रहों की स्थिति आपके लिए अनुकूल है, ${name}। आज वित्तीय स्थिरता के संकेत हैं। अपने दृष्टिकोण को संतुलित रखें।`,
      `${name}, आज आप प्रेरणा से भरे रहेंगे। व्यक्तिगत लक्ष्यों पर ध्यान केंद्रित करने और प्रियजनों के साथ समय बिताने का यह एक शानदार दिन है।`
    ],
    'Roman Hindi (Hinglish)': [
      `${name}, aaj ka din aapke liye positive energy la raha hai. Career aur relationship me improvement hoga. Calm raho aur apne decisions par trust karo.`,
      `Planetary alignments aapke liye unique opportunity bana rahe hain, ${name}. Financial stability aaj dikh rahi hai. Balanced perspective rakhein.`,
      `Ek acchi inspiration aapke aaspas hai, ${name}. Personal goals par focus karne aur loved ones ke sath time spend karne ka ye acha din hai.`
    ]
  };

  const targetLang = messages[lang as keyof typeof messages] ? lang : 'English';
  const randomIndex = Math.floor(Math.random() * 3);
  return messages[targetLang as keyof typeof messages][randomIndex];
};

export default function Horoscope() {
  const [formData, setFormData] = useState({
    rashi: 'Aries',
    language: 'English'
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof generateRashifalData> | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Daily Rashifal & Free Horoscope Reading | Astrologer Mannu Shastri Ji",
    "description": "Get your personalized Daily Rashifal (Horoscope) in English, Hindi, and Roman Hindi. Free daily astrology insights for all Zodiac signs.",
    "url": "https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/horoscope"
  };

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
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Fake 2 second delay for reading the stars
    setTimeout(() => {
      const generated = generateRashifalData(formData.rashi, formData.language);
      setResult(generated);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans selection:bg-orange-500/30">
      <SEO 
        title="Daily Rashifal & Horoscope Today | Astrologer Mannu Shastri Ji"
        description="Read your free daily Rashifal (Horoscope) in English, Hindi, and Hinglish. Get daily astrology insights, lucky colors, and numbers for your zodiac sign."
        keywords="daily rashifal, today horoscope india, free kundli reading, rashifal today hindi, astrology, zodiac signs"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/horoscope"
        structuredData={structuredData}
      />
      
      <Header activePage="horoscope" />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 pb-24 md:pb-20">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 rounded-full mb-6 relative group">
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full group-hover:bg-orange-500/30 transition-all duration-500"></div>
            <Star className="w-8 h-8 text-orange-500 relative z-10" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl font-serif text-white font-bold leading-tight mb-4">
            Today's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Daily Rashifal</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Select your Zodiac sign to receive today's personalized astrological reading. Available in English, Hindi, and Roman Hindi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Input Form */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-500" />
              Select Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Rashi Selection */}
              <div className="space-y-2">
                <label htmlFor="rashi" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <Star className="w-4 h-4" /> Zodiac Sign (Rashi)
                </label>
                <select 
                  id="rashi"
                  name="rashi"
                  value={formData.rashi}
                  onChange={handleInputChange}
                  className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3.5 outline-none text-zinc-200 transition-all appearance-none cursor-pointer"
                >
                  {zodiacSigns.map(sign => (
                    <option key={sign.value} value={sign.value}>{sign.label}</option>
                  ))}
                </select>
              </div>

              {/* Language Selection */}
              <div className="space-y-2">
                <label htmlFor="language" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <Languages className="w-4 h-4" /> Language preference
                </label>
                <select 
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3.5 outline-none text-zinc-200 transition-all appearance-none cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Roman Hindi (Hinglish)">Roman Hindi (Hinglish)</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-orange-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Consulting Stars...
                  </>
                ) : (
                  <>
                    Generate Today's Rashifal
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Area */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[400px]" ref={resultRef}>
            
            <AnimatePresence mode="wait">
              {!result && !loading && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 border border-zinc-800 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-zinc-900/20 h-full"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-700" />
                  </div>
                  <h3 className="text-xl font-serif text-zinc-400 mb-2">Awaiting the Cosmos</h3>
                  <p className="text-zinc-500 max-w-sm mb-4">
                    Select your Zodiac sign and preferred language to read today's accurate Rashifal predictions.
                  </p>
                </motion.div>
              )}

              {loading && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 border border-orange-500/20 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-zinc-900 relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                  <div className="w-20 h-20 relative mb-8">
                    <div className="absolute inset-0 border-t-2 border-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-r-2 border-amber-400 rounded-full animate-spin animation-delay-200" style={{ animationDirection: 'reverse' }}></div>
                    <div className="absolute inset-4 border-b-2 border-yellow-300 rounded-full animate-spin animation-delay-400"></div>
                    <Star className="w-6 h-6 text-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Reading Planetary Alignments...</h3>
                  <p className="text-sm text-zinc-400 animate-pulse">
                    Translating the cosmic energy for your Rashi...
                  </p>
                </motion.div>
              )}

              {result && !loading && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900 border border-orange-500/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="flex flex-col mb-8 pb-6 border-b border-zinc-800">
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                        {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <Star className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-bold leading-tight">
                      {result.heading}
                    </h3>
                  </div>

                  <div className="text-lg text-zinc-300 leading-relaxed mb-10">
                    {result.content}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#050505] border border-zinc-800 rounded-2xl p-5 text-center">
                      <span className="block text-sm text-zinc-500 mb-1">{result.colorLabel}</span>
                      <span className="text-lg font-bold text-white capitalize">{result.luckyColor}</span>
                    </div>
                    <div className="bg-[#050505] border border-zinc-800 rounded-2xl p-5 text-center">
                      <span className="block text-sm text-zinc-500 mb-1">{result.numberLabel}</span>
                      <span className="text-lg font-bold text-white max-w-full truncate">{result.luckyNumber}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800 text-center">
                    <p className="text-sm text-zinc-400 mb-4 italic">
                      For a detailed, hyper-personalized reading based on your complete Kundli (Birth Chart).
                    </p>
                    <a 
                      href={`https://wa.me/919928433259?text=Hello,%20I%20want%20a%20detailed%20astrology%20reading%20for%20my%20rashi%20${result.rashiLabel}.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg"
                    >
                      Consult Expert on WhatsApp
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION 2: Personal Kundli */}
        <div className="mt-32 border-t border-zinc-800 pt-20 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-zinc-900/50 rounded-full mb-6">
              <User className="w-8 h-8 text-zinc-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-bold leading-tight mb-4">
              Free Personal <span className="text-orange-500">Kundli Reading</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Get customized astrological insights based on your exact birth details.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Kundli Form */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500" />
                Birth Details
              </h3>

              <form onSubmit={handleKundliSubmit} className="space-y-6 relative z-10">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={kundliFormData.name}
                    onChange={handleKundliInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all"
                    required
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="dob" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Date of Birth
                    </label>
                    <input 
                      type="date" 
                      id="dob"
                      name="dob"
                      value={kundliFormData.dob}
                      onChange={handleKundliInputChange}
                      className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all [color-scheme:dark]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tob" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time
                    </label>
                    <input 
                      type="time" 
                      id="tob"
                      name="tob"
                      value={kundliFormData.tob}
                      onChange={handleKundliInputChange}
                      className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Place */}
                <div className="space-y-2">
                  <label htmlFor="place" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Place of Birth
                  </label>
                  <input 
                    type="text" 
                    id="place"
                    name="place"
                    value={kundliFormData.place}
                    onChange={handleKundliInputChange}
                    placeholder="City, State, Country"
                    className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all"
                    required
                  />
                </div>

                {/* Language (Kundli) */}
                <div className="space-y-2">
                  <label htmlFor="kundliLanguage" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                    <Languages className="w-4 h-4" /> Language preference
                  </label>
                  <select 
                    id="kundliLanguage"
                    name="language"
                    value={kundliFormData.language}
                    onChange={handleKundliInputChange}
                    className="w-full bg-[#050505] border border-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 rounded-xl px-4 py-3 outline-none text-zinc-200 transition-all appearance-none cursor-pointer"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="Roman Hindi (Hinglish)">Roman Hindi (Hinglish)</option>
                  </select>
                </div>

                {kundliError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg">
                    {kundliError}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={kundliLoading}
                  className="w-full bg-gradient-to-r from-zinc-700 to-zinc-600 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {kundliLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Chart...
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

            {/* Kundli Result Area */}
            <div className="lg:col-span-7 flex flex-col h-full min-h-[400px]" ref={kundliResultRef}>
              <AnimatePresence mode="wait">
                {!kundliResult && !kundliLoading && (
                  <motion.div 
                    key="empty-kundli"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 border border-zinc-800 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-zinc-900/20 h-full"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                      <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-700" />
                    </div>
                    <h3 className="text-xl font-serif text-zinc-400 mb-2">Cosmic Canvas</h3>
                    <p className="text-zinc-500 max-w-sm mb-4">
                      Fill out the personal details form to generate your unique Kundli analysis.
                    </p>
                  </motion.div>
                )}

                {kundliLoading && (
                  <motion.div 
                    key="loading-kundli"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 border border-zinc-700 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-zinc-900 relative overflow-hidden h-full"
                  >
                    <div className="w-20 h-20 relative mb-8">
                      <div className="absolute inset-0 border-t-2 border-orange-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-2 border-r-2 border-zinc-600 rounded-full animate-spin animation-delay-200" style={{ animationDirection: 'reverse' }}></div>
                      <Loader2 className="w-6 h-6 text-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-2">Charting Astrological Houses...</h3>
                    <p className="text-sm text-zinc-400 animate-pulse">
                      Analyzing planetary positions...
                    </p>
                  </motion.div>
                )}

                {kundliResult && !kundliLoading && (
                  <motion.div 
                    key="result-kundli"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="mb-6 pb-4 border-b border-zinc-800">
                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Cosmic Blueprint</h3>
                      <p className="text-zinc-500 text-sm flex gap-3 flex-wrap">
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5"/> {kundliFormData.name}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> {kundliFormData.dob}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> {kundliFormData.place}</span>
                      </p>
                    </div>

                    <div className="text-xl md:text-2xl text-zinc-200 font-serif leading-relaxed italic mb-8 relative z-10 px-4 border-l-4 border-orange-500/50">
                      "{kundliResult}"
                    </div>

                    <div className="mt-auto pt-6 text-center">
                       <a 
                        href={`https://wa.me/919928433259?text=Hello,%20I%20have%20generated%20my%20free%20Kundli%20Reading.%20My%20name%20is%20${kundliFormData.name}.%20I%20want%20to%20discuss%20further.`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border border-zinc-700 hover:border-orange-500 hover:text-orange-500 text-zinc-300 font-bold py-3 px-6 rounded-xl transition-all"
                      >
                        Deep Dive with Astrologer
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}


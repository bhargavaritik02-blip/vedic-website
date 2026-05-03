import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  Phone, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Heart, 
  Users, 
  MoonStar,
  Sparkles,
  Play,
  Instagram,
  ChevronDown,
  Award,
  Smile
} from 'lucide-react';

function Counter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from.toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          const formatted = Math.floor(value).toLocaleString();
          setDisplayValue(formatted + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

const faqs = [
  {
    question: "How soon can I see results for a relationship problem solution?",
    answer: "Every situation is different, but many people start noticing positive changes quickly. Whether you want to know how to get lost love back quickly or fix a marriage, consistency and trust in the process are important."
  },
  {
    question: "Is my personal information safe when seeking online love problem solution in India?",
    answer: "Yes, your privacy is our priority. All conversations and details shared with our relationship expert are kept 100% confidential and secure."
  },
  {
    question: "Can my specific problem be solved and can I save my relationship?",
    answer: "Every case is unique, but we provide personalized relationship guidance based on your situation to help you move towards a better outcome and bring love back."
  },
  {
    question: "Do I need to visit physically to get breakup help in India?",
    answer: "No, everything can be handled through our online relationship expert services. You can easily connect and get relationship advice online from the comfort of your home."
  },
  {
    question: "What if my partner is not talking? Do you have a solution for breakup and no contact?",
    answer: "Yes, even in no-contact situations, the right guidance can help improve emotional connection and serve as a partner not talking solution to open communication again."
  },
  {
    question: "How do I get started to fix relationship problems?",
    answer: "Simply click on the Call button, share your husband wife problem or love issue, and get real help for relationship issues immediately."
  },
  {
    question: "Is this suitable for serious love marriage family problem solutions?",
    answer: "Yes, whether you need a love marriage problem solution, breakup recovery help, or a wife misunderstanding solution, our guidance is tailored to your exact situation."
  },
  {
    question: "Will I get personal attention from a love specialist or general advice?",
    answer: "You will receive personalized guidance from a dedicated relationship expert based on your specific relationship problems and solutions needed, not generic advice."
  }
];

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: string | number }) {
  return (
    <div className="border-b border-zinc-800/60 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-orange-400' : 'text-zinc-200 group-hover:text-orange-200'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${isOpen ? 'bg-orange-500/20 text-orange-400' : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm sm:text-base text-zinc-400 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SpiritualService",
    "name": "Astrologer Mannu Shastri Ji",
    "image": "https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg",
    "description": "Expert guidance and solutions for love, marriage, and relationship problems.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sikar",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "telephone": "+919928433259",
    "priceRange": "$$"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden">
      <SEO 
        title="Astrologer Mannu Shastri | Best Love & Relationship Astrologer"
        description="With over 35 years of experience, Astrologer Mannu Shastri offers expert solutions for love, breakup, marriage, and relationship problems through Vedic Astrology."
        keywords="Astrologer Mannu Shastri, love problem solution, lost love back, marriage problem solution, fast relationship healing, best astrologer in India"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app"
        structuredData={structuredData}
      />
      <Header activePage="home" />

      <main className="max-w-[1440px] mx-auto p-4 sm:p-6 flex flex-col gap-4 pb-24 md:pb-6">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-grow auto-rows-auto">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -15px rgba(234, 88, 12, 0.2)" }}
          className="lg:col-span-7 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="inline-block mb-4 px-3 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-widest uppercase rounded-full w-fit relative z-10">
            Trusted Vedic Astrologer
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic leading-tight mb-4 text-orange-100 relative z-10">
            Get Your <br/><span className="text-orange-500">Lost Love Back</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl relative z-10">
            35+ years of trusted Vedic guidance. We provide the best relationship problem solution and genuine breakup help so you can fix relationship problems, save your relationship, and bring love back into your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 relative z-10">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919928433259" 
              className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(39, 39, 42, 1)" }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919928433259" 
              className="flex-1 bg-zinc-800 text-white font-bold py-3 px-4 rounded-xl border border-zinc-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Talk to Expert</span>
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-5">
            <img src="https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg" alt="Astrologer Mannu Shastri" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border border-zinc-700 shadow-xl shadow-black/50" />
            <div>
              <h3 className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">The Journey</h3>
              <h4 className="text-base sm:text-lg font-serif font-medium text-zinc-200">Astrologer Mannu Shastri</h4>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed italic border-l-2 border-orange-600 pl-4 mb-6">
            "With over 35 years of dedicated spiritual practice, Astrologer Mannu Shastri is recognized as a leading relationship expert in India, guiding thousands through life's most difficult emotional and relationship challenges. Based in Sikar, Rajasthan, he offers the best relationship guidance in India through deep study of Vedic Astrology and traditional remedies."
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Over the decades, he has helped more than 55,000 people gain clarity. Whether you need a love problem solution near me, emotional healing after a breakup, or trusted relationship advice online, his approach is simple—understand the root cause, align energies, and guide individuals toward practical spiritual solutions.
          </p>
          <div className="mt-auto flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-zinc-800">
            <div className="w-8 h-8 rounded-full border border-orange-600 flex items-center shrink-0 justify-center text-[10px] text-orange-600">✓</div>
            <p className="text-[11px] sm:text-xs text-zinc-300 font-medium italic">"Every consultation is handled with complete confidentiality and personal attention, ensuring guidance tailored to your unique situation."</p>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col"
        >
          <div className="mb-6 border-b border-zinc-800 pb-5">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-widest flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" />
              Expert Vedic Solutions
            </h3>
            <h2 className="text-xl sm:text-2xl font-serif text-white leading-snug">
              Precise and spiritual solutions for <span className="text-orange-500 italic">life's deepest challenges.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-3 flex-grow">
            {[
              { emoji: '💔', title: 'Lost Love Back Solution', desc: 'Expert guidance on how to get your ex back', hook: 'Going through the pain of a breakup? Our online relationship expert will help you resolve issues and get your lost love back quickly.' },
              { emoji: '💍', title: 'Love Marriage Problem Solution', desc: 'Remove family obstacles from your love marriage', hook: 'Family not agreeing or facing intercaste issues? Find a peaceful love marriage family problem solution that everyone accepts.' },
              { emoji: '❤️‍🩹', title: 'Breakup Recovery Help', desc: 'Emotional healing after breakup and communication repair', hook: 'Partner not talking solution? Remove negativity and fix your relationship after a fight through targeted guidance.' },
              { emoji: '👩‍❤️‍👨', title: 'Husband Wife Problem Solution', desc: 'Make your married life joyful and misunderstandings-free', hook: 'Are daily arguments ruining your bond? We provide the right marriage problem solution to rebuild trust with your spouse.' },
              { emoji: '🧿', title: 'Black Magic Removal', desc: 'Freedom from evil eye and negative aura affecting your love', hook: 'Is everything suddenly going wrong? Eliminate negativity completely to save your relationship before a difficult breakup.' },
              { emoji: '📈', title: 'Career & Life Guidance', desc: 'The path to progress when personal problems disrupt work', hook: 'Not getting success despite hard work? Choose the right path mapped out by an expert relationship and life guide.' },
              { emoji: '🏡', title: 'Family Dispute Resolution', desc: 'Expert advice for love problems and peace at home', hook: 'Are daily conflicts destroying your peace of mind? Create a positive family environment with real help for relationship issues.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, x: 4, backgroundColor: "rgba(24, 24, 27, 1)", borderColor: "rgba(234, 88, 12, 0.4)" }}
                className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex gap-4 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-orange-950/40 rounded-full flex items-center justify-center shrink-0 border border-orange-900 shadow-inner group-hover:bg-orange-600/20 transition-colors">
                  <span className="text-xl">{service.emoji}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-zinc-100 flex items-center gap-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-orange-400 font-medium mb-1.5">{service.desc}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed border-l-2 border-orange-600/30 pl-2">{service.hook}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 bg-orange-950/30 border border-orange-900/50 rounded-2xl p-5 text-center flex flex-col items-center gap-4">
            <p className="text-sm text-zinc-300 font-medium italic leading-relaxed">
              "Stop worrying about your problems alone. Take the first step towards a happier life today."
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919928433259"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20 w-full"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
          </div>
        </motion.section>

        {/* Right Col Wrapper for Trust, Testimonials, CTA */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Top Row inside Right Col (Trust + Top Testimonial) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            {/* Trust Boosters */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center"
            >
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-5">Why Choose Him?</h3>
              <ul className="space-y-4">
                <motion.li whileHover="hover" className="flex items-center gap-3 text-sm text-zinc-300 group cursor-default">
                  <motion.span 
                    variants={{ hover: { scale: 1.2, rotate: 15 } }}
                    className="text-orange-500 bg-orange-500/10 p-1.5 rounded-full flex items-center justify-center"
                  >
                    <Clock className="w-4 h-4" />
                  </motion.span> 
                  <span className="group-hover:text-orange-200 transition-colors">35+ Years of Proven Practice</span>
                </motion.li>
                <motion.li whileHover="hover" className="flex items-center gap-3 text-sm text-zinc-300 group cursor-default">
                  <motion.span 
                    variants={{ hover: { scale: 1.2, rotate: -15 } }}
                    className="text-orange-500 bg-orange-500/10 p-1.5 rounded-full flex items-center justify-center"
                  >
                    <ShieldCheck className="w-4 h-4" />
                  </motion.span> 
                  <span className="group-hover:text-orange-200 transition-colors">One-to-One Confidentiality</span>
                </motion.li>
                <motion.li whileHover="hover" className="flex items-center gap-3 text-sm text-zinc-300 group cursor-default">
                  <motion.span 
                    variants={{ hover: { scale: 1.2, y: -2 } }}
                    className="text-orange-500 bg-orange-500/10 p-1.5 rounded-full flex items-center justify-center"
                  >
                    <MapPin className="w-4 h-4" />
                  </motion.span> 
                  <span className="group-hover:text-orange-200 transition-colors">Authentic Sikar Tradition</span>
                </motion.li>
                <motion.li whileHover="hover" className="flex items-center gap-3 text-sm text-zinc-300 group cursor-default">
                  <motion.span 
                    variants={{ hover: { scale: 1.2, rotate: 10 } }}
                    className="text-orange-500 bg-orange-500/10 p-1.5 rounded-full flex items-center justify-center"
                  >
                    <Users className="w-4 h-4" />
                  </motion.span> 
                  <span className="group-hover:text-orange-200 transition-colors">Over 55,000 Consultations Completed</span>
                </motion.li>
                <motion.li whileHover="hover" className="flex items-center gap-3 text-sm text-zinc-300 group cursor-default">
                  <motion.span 
                    variants={{ hover: { scale: 1.2, rotate: 90 } }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500 bg-orange-500/10 p-1.5 rounded-full flex items-center justify-center"
                  >
                    <Star className="w-4 h-4" />
                  </motion.span> 
                  <span className="group-hover:text-orange-200 transition-colors">Practical + Spiritual Approach</span>
                </motion.li>
              </ul>
            </motion.section>

            {/* Testimonial 1 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-orange-600/10 border border-orange-900/30 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center cursor-default"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm lg:text-base text-zinc-300 leading-relaxed italic mb-4 relative z-10">
                "After nearly 2 years of separation, my husband returned and we rebuilt our relationship. The guidance I received truly helped me stay patient and hopeful."
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <img loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80" alt="R. Sharma" className="w-8 h-8 rounded-full object-cover border border-orange-500/30 blur-[1.5px]" />
                <p className="text-xs font-bold text-orange-400 tracking-wider">R. SHARMA, MUMBAI</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-orange-900/30 text-9xl font-serif leading-none opacity-20 pointer-events-none">"</div>
            </motion.section>
            
            {/* Testimonial 2 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center cursor-default"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm lg:text-base text-zinc-300 leading-relaxed italic mb-4 relative z-10">
                "I was facing massive hurdles in my career. Shastri ji's simple, practical astrological remedies brought stability back to my life."
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <img loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80" alt="Vikram S." className="w-8 h-8 rounded-full object-cover border border-zinc-700 blur-[1.5px]" />
                <p className="text-xs font-bold text-orange-400 tracking-wider">VIKRAM S., DELHI</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-zinc-800 text-9xl font-serif leading-none opacity-50 pointer-events-none">"</div>
            </motion.section>

            {/* Testimonial 3 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center cursor-default"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm lg:text-base text-zinc-300 leading-relaxed italic mb-4 relative z-10">
                "A truly genuine guide. Unlike others, there were no false promises. Just patient listening and spiritual advice that actually worked."
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <img loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80" alt="Anjali K." className="w-8 h-8 rounded-full object-cover border border-zinc-700 blur-[1.5px]" />
                <p className="text-xs font-bold text-orange-400 tracking-wider">ANJALI K., JAIPUR</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-zinc-800 text-9xl font-serif leading-none opacity-50 pointer-events-none">"</div>
            </motion.section>

             {/* Testimonial 4 */}
             <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center cursor-default"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm lg:text-base text-zinc-300 leading-relaxed italic mb-4 relative z-10">
                "We were on the verge of divorce, but the spiritual counseling provided here completely changed our perspective. We are now happily back together."
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <img loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80" alt="S. Gupta" className="w-8 h-8 rounded-full object-cover border border-zinc-700 blur-[1.5px]" />
                <p className="text-xs font-bold text-orange-400 tracking-wider">S. GUPTA, PUNE</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-zinc-800 text-9xl font-serif leading-none opacity-50 pointer-events-none">"</div>
            </motion.section>

            {/* Testimonial 5 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center cursor-default"
            >
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm lg:text-base text-zinc-300 leading-relaxed italic mb-4 relative z-10">
                "Mannu Shastri has a deep understanding of Vedic astrology. The remedies were simple to follow and highly effective for my family's peace."
              </p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <img loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80" alt="Amit Chaudhary" className="w-8 h-8 rounded-full object-cover border border-zinc-700 blur-[1.5px]" />
                <p className="text-xs font-bold text-orange-400 tracking-wider">AMIT CHAUDHARY, NOIDA</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-zinc-800 text-9xl font-serif leading-none opacity-50 pointer-events-none">"</div>
            </motion.section>
          </div>

          {/* Bottom Row inside Right Col (Final CTA / Remaining content) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                Your happiness deserves the right guidance.
              </h3>
              <p className="text-sm text-zinc-400">
                Speak directly today—completely private and confidential.
              </p>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919928433259" 
              className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-500 font-bold py-4 px-6 rounded-xl transition-colors whitespace-nowrap text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Guidance</span>
            </motion.a>
          </motion.section>

        </div>
      </div>

      {/* Video Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 lg:p-12 shrink-0 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-950/20 to-transparent pointer-events-none"></div>
        
        <div className="text-center mb-10 relative z-10">
          <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-widest flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4" />
            Real Client Video Testimonials
            <Sparkles className="w-4 h-4" />
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Don't just take our word for it — <br className="hidden md:block"/>
            <span className="text-orange-500 italic">hear real experiences from real people.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
          {[
            {
              title: "Lost Love Reconnected",
              caption: "After a breakup, communication was restored and the bond improved",
              thumbnail: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80",
              url: "https://drive.google.com/file/d/1hiWJX2Rca3Io5-vhkp3G7cvsFzUrOQ-J/view?usp=drive_link"
            },
            {
              title: "Love Marriage Success",
              caption: "Family issues were resolved and approval was achieved",
              thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80",
              url: "https://drive.google.com/file/d/1HqLR3gShaNE3X7dE6pIrCT1p5KbCcOd6/view?usp=drive_link"
            },
            {
              title: "Relationship Healing",
              caption: "Frequent fights reduced and emotional stability returned",
              thumbnail: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&auto=format&fit=crop&q=80",
              url: "https://drive.google.com/file/d/1B0iJWe_l5Sv4DlTj3UGWugWTN0clSown/view?usp=drive_link"
            },
            {
              title: "Family Harmony Restored",
              caption: "Peace returned home after years of constant disputes and tension",
              thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
              url: "https://www.viddler.com/Qe9pFF"
            },
            {
              title: "Unexpected Reunion",
              caption: "Reunited with my partner when all hope seemed completely lost",
              thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
              url: "https://drive.google.com/file/d/1hiWJX2Rca3Io5-vhkp3G7cvsFzUrOQ-J/view?usp=drive_link"
            },
            {
              title: "Marriage Saved From Divorce",
              caption: "Found effective spiritual solutions to rebuild our trust and love",
              thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
              url: "https://drive.google.com/file/d/1HqLR3gShaNE3X7dE6pIrCT1p5KbCcOd6/view?usp=drive_link"
            }
          ].map((video, idx) => (
            <motion.a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col group hover:border-orange-500/50 transition-all shadow-xl shadow-black/40"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-zinc-800">
                <img loading="lazy" src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
                  <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(234,88,12,0.6)] group-hover:scale-110 group-hover:bg-orange-500 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] transition-all duration-300">
                    <Play className="w-6 h-6 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-zinc-700/50 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-300">Real Client Experience</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-orange-100 mb-1.5">{video.title}</h4>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{video.caption}</p>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center flex flex-col items-center relative z-10">
          <p className="text-lg text-zinc-300 font-serif italic mb-5">Ready to find a solution to your problem?</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919928433259"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20 inline-flex w-fit mx-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </motion.a>
        </div>
      </motion.section>

      {/* Stats Counter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-12 shrink-0 relative overflow-hidden"
      >
        <div className="text-center mb-10 relative z-10">
          <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-widest flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4" />
            Trusted by Thousands
            <Sparkles className="w-4 h-4" />
          </h3>
          <h2 className="text-3xl md:text-3xl font-serif text-white">
            Years of experience and <span className="text-orange-500 italic">thousands of happy clients.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative z-10 w-full max-w-5xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif tracking-tight flex">
              <Counter from={0} to={55000} duration={2} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide uppercase text-center w-full">Clients Served</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif tracking-tight flex">
              <Counter from={0} to={35} duration={1.5} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide uppercase text-center w-full">Years of Exp.</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
              <Smile className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif tracking-tight flex">
              <Counter from={0} to={98} duration={2} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide uppercase text-center w-full">Satisfaction</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-serif tracking-tight flex">
              24<span className="text-orange-500">/</span>7
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide uppercase text-center w-full">Support</p>
          </div>

        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-12 shrink-0 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-orange-950/10 to-transparent pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-widest flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4" />
            Frequently Asked Questions
            <Sparkles className="w-4 h-4" />
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Clear answers to your <span className="text-orange-500 italic">most common concerns.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 sm:p-6 mb-10 relative z-10 shadow-xl shadow-black/20">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center flex flex-col items-center relative z-10">
          <p className="text-lg text-zinc-300 font-serif italic mb-5">Still have questions? Talk to us directly</p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919928433259"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20 inline-flex w-fit mx-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Talk to Expert</span>
          </motion.a>
        </div>
      </motion.section>

      {/* Instagram Connect Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-12 shrink-0 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mt-2"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex-1 text-center md:text-left z-10">
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
            Join Us on Instagram
          </h3>
          <p className="text-zinc-400 text-sm md:text-base">
            See real client stories, daily insights, and success updates
          </p>
          <p className="text-zinc-300 text-sm mt-3 border-l-2 border-orange-500 pl-3">
            Follow us to stay connected and explore more real results.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center p-[2px] shadow-lg shadow-pink-500/10 shrink-0">
              <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center border-[3px] border-zinc-900 overflow-hidden">
                <img loading="lazy" src="https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg" alt="Instagram Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-orange-100 font-bold text-lg hover:text-orange-400 transition-colors cursor-pointer">@get_your_lost_love_back</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-0.5">Real Client Experiences</p>
            </div>
          </div>
        </div>

        <div className="z-10 shrink-0 flex flex-col gap-3 items-center md:items-end w-full md:w-auto mt-6 md:mt-0">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/get_your_lost_love_back?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-zinc-700 hover:border-orange-500/50 hover:bg-orange-500/10 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg w-full md:w-auto"
          >
            <Instagram className="w-5 h-5 text-orange-400" />
            <span>Visit Instagram Profile</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919928433259"
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-600/20 w-full md:w-auto"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </motion.a>
          <p className="text-xs text-zinc-500 italic mt-1 text-center md:text-right">No spam, only real updates</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-zinc-900 px-2 mt-2 gap-4 shrink-0 relative z-10">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest text-center sm:text-left">
          Vedic Wisdom & Spiritual Support • Sikar, Rajasthan
        </p>
        <p className="text-[10px] text-zinc-600 italic text-center sm:text-right max-w-xl">
          Disclaimer: All consultations are based on traditional Vedic knowledge and personal guidance. Results may vary depending on individual circumstances. Client privacy is strictly maintained.
        </p>
      </footer>

      {/* Floating Contact Widgets */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-4 items-end">
        {/* Floating Call Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+919928433259"
          className="bg-orange-600 text-white p-4 rounded-full shadow-2xl shadow-orange-600/40 hidden md:flex items-center justify-center group relative cursor-pointer"
        >
          <span className="absolute -top-14 right-0 md:-left-36 md:-top-0 md:bottom-2 md:right-auto bg-zinc-900 border border-zinc-700 text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-zinc-200 pointer-events-none shadow-xl transform md:-translate-x-2 flex items-center gap-2">
            Talk to Expert
          </span>
          <Phone className="w-7 h-7" />
          <span className="absolute w-full h-full rounded-full bg-orange-600 opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        </motion.a>
        
        {/* Floating WhatsApp Live Chat Widget */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/919928433259?text=Hello%20I%20need%20help%20with%20my%20relationship"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center group relative cursor-pointer hidden md:flex"
        >
          <span className="absolute -top-14 right-0 md:-left-36 md:-top-0 md:bottom-2 md:right-auto bg-zinc-900 border border-zinc-700 text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-zinc-200 pointer-events-none shadow-xl transform md:-translate-x-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            WhatsApp
          </span>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.00033 21.0538L3.25042 16.5C2.26189 14.801 1.74204 12.8711 1.74542 10.8841C1.75883 5.30906 6.30739 0.771484 11.8841 0.771484C14.593 0.782806 17.1345 1.84478 19.0494 3.76561C20.9642 5.68644 22.0152 8.2323 22.0039 10.9412C21.9904 16.5163 17.443 21.0538 11.8651 21.0538C9.9142 21.0504 8.01633 20.5517 6.33924 19.6105L2.00033 21.0538ZM6.89061 17.3629C8.36195 18.2366 10.0906 18.7054 11.864 18.7077H11.8674C16.149 18.7077 19.6366 15.228 19.6467 10.9468C19.6545 8.87321 18.849 6.914 17.3846 5.44955C15.9202 3.98511 13.9631 3.17957 11.8875 3.17169C7.6047 3.17169 4.11603 6.65022 4.1059 10.9326C4.09914 12.756 4.60677 14.5366 5.56839 16.0689L4.99824 18.1408L7.108 17.575M16.5562 13.6267C16.3006 13.4988 15.0441 12.882 14.8099 12.7963C14.5756 12.7107 14.4044 12.6684 14.2332 12.9239C14.062 13.1795 13.5714 13.7548 13.4217 13.9255C13.2721 14.096 13.1223 14.1174 12.8667 13.9895C12.6111 13.8617 11.7876 13.593 10.8143 12.7292C10.0558 12.0561 9.5401 11.222 9.39031 10.9664C9.24053 10.7107 9.37466 10.5721 9.50284 10.4448C9.61805 10.3303 9.75704 10.147 9.8853 10.0084C10.0136 9.8698 10.0563 9.78443 10.1419 9.61386C10.2274 9.44328 10.1847 9.29412 10.1206 9.1662C10.0565 9.03828 9.56456 7.82424 9.35084 7.33418C9.14138 6.85324 8.93282 6.91883 8.77457 6.91151C8.62479 6.90418 8.45366 6.9025 8.28253 6.9025C8.11141 6.9025 7.83359 6.96644 7.60002 7.222C7.36645 7.47756 6.70295 8.0943 6.70295 9.34988C6.70295 10.6055 7.62143 11.8184 7.74971 11.989C7.878 12.1596 9.54124 14.832 12.1648 15.867C14.3644 16.7351 14.7891 16.5432 15.2598 16.4996C15.7305 16.4559 16.7788 15.8906 16.9925 15.3364C17.2062 14.7821 17.2062 14.3129 17.1421 14.2275C17.078 14.142 16.8974 14.0993 16.6384 13.9713" />
          </svg>
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        </motion.a>
      </div>

      {/* Floating Horoscope Widget */}
      <div className="fixed bottom-24 left-4 md:bottom-8 md:left-8 z-50 flex flex-col gap-4 items-start">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/horoscope"
          className="bg-zinc-950 border border-orange-500/50 text-white p-2 sm:p-2.5 pr-4 sm:pr-5 rounded-full shadow-2xl shadow-orange-600/20 flex items-center justify-center flex-row gap-2.5 group relative cursor-pointer"
        >
          <div className="bg-orange-500/10 p-2 sm:p-2.5 rounded-full relative">
            <span className="absolute -inset-[3px] rounded-full border border-orange-500/30 animate-[spin_4s_linear_infinite]"></span>
            <MoonStar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 relative z-10" />
          </div>
          <span className="font-bold text-xs sm:text-sm text-orange-400 whitespace-nowrap tracking-wide leading-none">
            Free Horoscope<br/>
            <span className="text-[9px] sm:text-[10px] text-zinc-400 font-normal uppercase tracking-widest mt-0.5 block">By Mannu Shastri</span>
          </span>
          <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 border-2 border-zinc-950"></span>
          </span>
        </motion.a>
      </div>
      </main>
    </div>
  );
}

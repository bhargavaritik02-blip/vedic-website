import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { Phone, CheckCircle, ChevronDown, MessageCircle, Star, HeartCrack, Flame, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: string | number }) {
  return (
    <div className="border-b border-zinc-800 last:border-0 relative z-10">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
      >
        <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-amber-400' : 'text-zinc-200 group-hover:text-amber-200'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${isOpen ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-900 text-zinc-400 group-hover:bg-zinc-700'}`}
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

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    { text: "I got my love back within days. Amazing experience.", author: "Ritik Sharma", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80" },
    { text: "Very accurate and helpful guidance.", author: "Neha Gupta", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces&q=80" },
    { text: "Solved my breakup problem quickly.", author: "Vikram Singh", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80" },
    { text: "Highly professional and trustworthy.", author: "Anjali Desai", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80" },
    { text: "Best astrologer for relationship issues.", author: "Pooja Verma", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80" }
  ];

  const faqs = [
    { question: "How fast will I get results?", answer: "Results can vary, but many of our clients start noticing positive changes within a few days of following our guided solutions." },
    { question: "Is my information confidential?", answer: "Yes, 100%. We take your privacy very seriously. All conversations and shared details are completely private and never shared." },
    { question: "Can all love problems be solved?", answer: "Most love problems stem from misunderstandings, negativity, or astrological misalignments. We provide highly effective spiritual and practical solutions for over 95% of cases." },
    { question: "Do I need to visit physically?", answer: "No, you don't. You can get our complete guidance and problem resolution through phone calls and WhatsApp from the comfort of your home." }
  ];

  const serviceCards = [
    {
      title: "Lost Love Back Specialist",
      icon: <HeartCrack className="w-8 h-8 text-amber-500" />,
      desc: "If you have lost your true love due to misunderstanding, breakup, or external problems, we can help you bring your love back. Our proven methods have helped thousands of clients reunite with their loved ones.",
      bullets: ["Quick results", "Personalized guidance", "100% confidential"],
      bgImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Love Problem Solution",
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      desc: "Facing issues in your relationship? Whether it's trust issues, fights, or emotional distance, we provide accurate solutions to bring peace and understanding.",
      bullets: ["Solve misunderstandings", "Improve communication", "Strengthen bond"],
      bgImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Breakup Solution",
      icon: <MessageCircle className="w-8 h-8 text-amber-500" />,
      desc: "Breakups can be painful and stressful. Our solutions are designed to remove negativity and rebuild your relationship.",
      bullets: ["Remove negative energy", "Reconnect emotionally", "Fast support"],
      bgImage: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Husband/Wife Problem Solution",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      desc: "Married life problems can affect your peace of mind. We help resolve conflicts and bring harmony back into your relationship.",
      bullets: ["Resolve conflicts", "Restore trust", "Long-term happiness"],
      bgImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "Marriage Problem Solution",
      icon: <Star className="w-8 h-8 text-amber-500" />,
      desc: "If you are facing delays or obstacles in marriage, we provide guidance to remove all barriers and ensure a successful marriage.",
      bullets: ["Remove obstacles", "Positive results", "Strong future"],
      bgImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Astrology & Relationship Healing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Astrologer Mannu Shastri Ji",
      "image": "https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg"
    },
    "description": "Lost Love Back Specialist, Love Problem Solution, Breakup Solution, Husband/Wife Problem Solution, and Marriage Problem Solution.",
    "areaServed": "India",
    "url": "https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/services"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans">
      <SEO 
        title="Astrology Services | Love & Relationship Solutions | Mannu Shastri"
        description="Explore our specialized astrology services including lost love back, marriage problems, breakup solutions. Fast and confidential help in India."
        keywords="astrology services, love problem solution near me, breakup solution, husband wife dispute, lost love back specialist"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/services"
        structuredData={structuredData}
      />
      <Header activePage="services" />
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col gap-12 py-10 pb-24 md:pb-10">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-center py-12 px-6 sm:py-16 md:py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Trusted by 55,000+ Satisfied Clients Across India
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl lg:text-6xl font-serif mb-6 text-white leading-tight max-w-4xl mx-auto">
            Powerful Astrology Solutions for <br/>
            <span className="text-amber-500 italic">Love & Relationship Problems</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed">
            We provide accurate and effective astrology solutions to solve your love, relationship, and marriage problems. Our guidance is based on deep knowledge, experience, and proven results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919928433259?text=Hello%20I%20need%20solution%20for%20my%20problem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919928433259" 
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-600/20"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
          </div>
        </section>

        {/* ABOUT SERVICES INTRO */}
        <section className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-serif italic border-l-2 md:border-l-0 md:border-t-2 border-amber-600/50 pl-4 md:pl-0 md:pt-6">
            "Our astrology services are designed to help people who are facing emotional pain, relationship issues, or personal struggles. We understand how difficult these situations can be, and we provide personalized solutions based on your unique problem. Thousands of people have already benefited from our services and found happiness again."
          </p>
        </section>

        {/* SERVICES SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-amber-600/40 transition-colors group relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-25 transition-opacity duration-500" 
                style={{ backgroundImage: `url(${srv.bgImage})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-zinc-900/30 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-950/50 backdrop-blur-md border border-amber-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{srv.desc}</p>
                <ul className="space-y-3 mb-8">
                  {srv.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-auto relative z-10">
                <a href="https://wa.me/919928433259?text=Hello%20I%20need%20solution%20for%20my%20problem" className="bg-zinc-900 hover:bg-zinc-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
                </a>
                <a href="tel:+919928433259" className="bg-amber-600/10 hover:bg-amber-600/20 text-amber-500 text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-amber-600/30">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6">
              Why <span className="text-amber-500">55,000+</span> Clients Trust Us?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Trust is earned through consistent results. Our deep understanding of Vedic astrology combined with genuine care for our clients' well-being makes us the leading choice for relationship solutions. We believe in transparency, honesty, and providing practical remedies that actually bring change.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="tel:+919928433259" className="w-full sm:w-auto justify-center bg-amber-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-500 shadow-lg shadow-amber-600/20">
                <Phone className="w-5 h-5" /> Get Trusted Help
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Years of experience in astrology",
              "Accurate and practical solutions",
              "Instant response on WhatsApp",
              "Direct phone consultation available",
              "100% privacy and confidentiality",
              "Affordable and genuine services"
            ].map((point, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
                </div>
                <p className="text-sm text-zinc-300 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-12">How It <span className="text-amber-500">Works?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-zinc-900"></div>
            {[
              { num: '1', title: 'Contact Us', desc: 'Contact on WhatsApp or Call' },
              { num: '2', title: 'Share Truth', desc: 'Share your problem' },
              { num: '3', title: 'Get Solution', desc: 'Get personalized solution' },
              { num: '4', title: 'See Changes', desc: 'Follow guidance and see results' }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-amber-500 text-amber-500 flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  {step.num}
                </div>
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Real Words. <span className="text-amber-500">Real Results.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative">
                <div className="flex gap-1 mb-4 text-amber-500">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                  <Star className="w-4 h-4" fill="currentColor" />
                </div>
                <p className="text-zinc-300 italic text-sm mb-6 leading-relaxed">"{testi.text}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <img loading="lazy" src={testi.image} alt={testi.author} className="w-8 h-8 rounded-full object-cover border border-amber-500/30 blur-[1.5px]" />
                  <p className="text-xs uppercase tracking-widest text-amber-500 font-bold">{testi.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-3xl mx-auto w-full py-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Frequently Asked <span className="text-amber-500">Questions</span></h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-8 relative">
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
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-[2rem] p-8 sm:p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Get Your Solution Now</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Don't let your problem grow bigger. Take action now and get instant help to restore the peace and love you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919928433259?text=Hello%20I%20need%20solution%20for%20my%20problem" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-orange-600 hover:bg-zinc-100 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-xl">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <a href="tel:+919928433259" className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors">
                <Phone className="w-5 h-5" /> Call Directly
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-800 bg-black mt-10 pb-20 md:pb-0">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-2">Astrologer Mannu Shastri Ji</h4>
            <p className="text-sm text-zinc-500 uppercase tracking-widest">Vedic Love & Relationship Expert</p>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Home</Link>
            <Link to="/services" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors">Services</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919928433259" className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
              <Phone className="w-4 h-4" /> +91 9928433259
            </a>
            <a href="https://wa.me/919928433259?text=Hello" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#25D366] flex items-center gap-2 text-sm transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

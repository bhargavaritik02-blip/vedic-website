import { motion } from 'motion/react';
import { Phone, HeartPulse, ShieldCheck, Clock, Users, HeartCrack } from 'lucide-react';
import WhatsappIcon from '../components/WhatsappIcon';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function LoveProblemJaipur() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Love Problem Solution in Jaipur | Lost Love Back Specialist",
    "description": "Get the best love problem solution in Jaipur. Bring your lost love back with expert astrology services. Trusted by 55,000+ satisfied clients. Contact now.",
    "url": "https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/love-problem-solution-jaipur"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans">
      <SEO 
        title="Love Problem Solution in Jaipur | Lost Love Back Specialist"
        description="Get the best love problem solution in Jaipur. Bring your lost love back with expert astrology services. Trusted by 55,000+ satisfied clients. Contact now."
        keywords="love problem solution in Jaipur, lost love back, breakup solution, love marriage problem, astrologer in Jaipur"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/love-problem-solution-jaipur"
        structuredData={structuredData}
      />
      
      <Header activePage="jaipur-love" />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col gap-12 py-10 pb-24 md:pb-10">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-center py-12 px-6 sm:py-16 md:py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
            100% Guaranteed Results
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight max-w-4xl mx-auto mb-6">
            Love Problem Solution in <span className="text-orange-500">Jaipur</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Are you facing serious problems in your relationship? Do you feel your love life is getting complicated day by day? We provide powerful and effective love problem solution in Jaipur. Our expert astrology services are trusted by more than 55,000 satisfied clients. We understand your emotions and provide fast and accurate solutions to bring happiness back into your life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="https://wa.me/919928433259?text=I%20need%20help%20with%20my%20love%20problem" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#25D366]/20 transform hover:scale-105 group">
              <WhatsappIcon className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" /> Chat on WhatsApp
            </a>
            <a href="tel:+919928433259" className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-orange-600/20 transform hover:scale-105 group">
              <Phone className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" /> Call Now
            </a>
          </div>
        </section>

        {/* LOST LOVE BACK SECTION */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Get Your <span className="text-orange-500">Lost Love Back</span> Quickly</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              If you have lost your true love due to misunderstanding, breakup, or external pressure, our lost love back services can help you reunite with your partner. We provide step-by-step guidance to rebuild your relationship and remove all obstacles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:+919928433259" className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-xl transition-colors font-medium group">
                <Phone className="w-4 h-4 text-orange-400 group-hover:animate-[bounce_1s_infinite]" /> Talk to Expert
              </a>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
               <HeartPulse className="w-8 h-8 text-orange-500 mb-4" />
               <h3 className="text-white font-bold mb-2">Reunite Quickly</h3>
               <p className="text-sm text-zinc-400">Fast and powerful Vedic remedies to bring your partner back.</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
               <ShieldCheck className="w-8 h-8 text-orange-500 mb-4" />
               <h3 className="text-white font-bold mb-2">100% Confidential</h3>
               <p className="text-sm text-zinc-400">Your privacy is fully protected during the entire process.</p>
             </div>
          </div>
        </section>

        {/* COMMON PROBLEMS CAUSES SECTION */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Common Love <span className="text-orange-500">Problems We Solve</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">No matter how difficult your relationship situation is, our expert guidance provides practical and spiritual solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Breakup & Patch-up", desc: "Breakup issues and patch-up solutions to restore broken bonds" },
              { title: "One-Sided Love", desc: "Attraction and one-sided love problems solved smoothly" },
              { title: "Family Opposition", desc: "Overcome family opposition in love marriage" },
              { title: "Trust Issues", desc: "Solve trust and severe misunderstanding issues" },
              { title: "Emotional Distance", desc: "Bridge emotional distance and fix communication problems" }
            ].map((prob, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4">
                <div className="mt-1 bg-orange-500/20 p-2 rounded-full">
                  <HeartCrack className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{prob.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href="https://wa.me/919928433259" className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors group">
              <WhatsappIcon className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" /> Contact for Solution
            </a>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Why Choose Our <span className="text-orange-500">Astrology Services?</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Our services are based on experience, trust, and proven results. We focus on providing real and practical solutions for every client.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
               <Users className="w-10 h-10 text-orange-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">55,000+</h3>
               <p className="text-sm text-zinc-400">Happy Clients</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
               <ShieldCheck className="w-10 h-10 text-orange-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">100% Confidential</h3>
               <p className="text-sm text-zinc-400">Consultation</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
               <WhatsappIcon className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">Instant Support</h3>
               <p className="text-sm text-zinc-400">Via WhatsApp</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
               <Phone className="w-10 h-10 text-orange-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">Direct Call</h3>
               <p className="text-sm text-zinc-400">Consultation Available</p>
             </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Our Core <span className="text-orange-500">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Lost Love Back Specialist</h3>
              <p className="text-zinc-400">We help you bring your lost love back quickly with effective and trusted methods.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Love Problem Solution</h3>
              <p className="text-zinc-400">Solve all types of relationship problems and bring peace into your love life.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Breakup Solution</h3>
              <p className="text-zinc-400">Remove negativity and rebuild your broken relationship.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Marriage Problem Solution</h3>
              <p className="text-zinc-400">Remove obstacles and ensure a successful and happy marriage.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">How Our <span className="text-orange-500">Process Works?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-4 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">1</div>
              <h3 className="text-white font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-zinc-400">On WhatsApp or Call</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">2</div>
              <h3 className="text-white font-bold mb-2">Share Details</h3>
              <p className="text-sm text-zinc-400">Explain your problem</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">3</div>
              <h3 className="text-white font-bold mb-2">Get Solution</h3>
              <p className="text-sm text-zinc-400">Personalized remedies</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">4</div>
              <h3 className="text-white font-bold mb-2">See Results</h3>
              <p className="text-sm text-zinc-400">Follow guidance</p>
            </div>
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-zinc-800 z-0"></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Client <span className="text-orange-500">Testimonials</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl italic">
              <p className="text-zinc-300 mb-4">"I got my love back within days. Highly recommended!"</p>
              <p className="text-sm font-bold text-orange-500">— A. Sharma</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl italic">
              <p className="text-zinc-300 mb-4">"Very accurate and helpful guidance during my breakup."</p>
              <p className="text-sm font-bold text-orange-500">— R. K.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl italic">
              <p className="text-zinc-300 mb-4">"Best astrologer for relationship problems in Jaipur."</p>
              <p className="text-sm font-bold text-orange-500">— S. Verma</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Frequently Asked <span className="text-orange-500">Questions</span></h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
             <div className="border-b border-zinc-800 pb-4">
               <h3 className="text-lg font-bold text-white mb-2">Q1: How fast will I get results?</h3>
               <p className="text-zinc-400">Results vary depending on the complexity of your situation, but many clients see positive changes quickly when following the guidance consistently.</p>
             </div>
             <div className="border-b border-zinc-800 pb-4">
               <h3 className="text-lg font-bold text-white mb-2">Q2: Is my information confidential?</h3>
               <p className="text-zinc-400">Yes, 100%. We strictly maintain client privacy and all your details are completely secure with us.</p>
             </div>
             <div className="border-b border-zinc-800 pb-4">
               <h3 className="text-lg font-bold text-white mb-2">Q3: Can all love problems be solved?</h3>
               <p className="text-zinc-400">We offer expert astrological remedies tailored to your unique challenges, and have successfully resolved thousands of complex relationship issues.</p>
             </div>
             <div className="border-b border-zinc-800 pb-4">
               <h3 className="text-lg font-bold text-white mb-2">Q4: Do I need to visit physically?</h3>
               <p className="text-zinc-400">No, you can easily connect and consult with us online via WhatsApp or Phone call from anywhere.</p>
             </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-[2rem] p-8 sm:p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Get Instant Solution Now</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Do not wait for your problem to get worse. Take action now and get immediate help from an expert.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919928433259" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-[#25D366] hover:bg-zinc-100 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-xl group">
                <WhatsappIcon className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" /> Chat on WhatsApp
              </a>
              <a href="tel:+919928433259" className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors group">
                <Phone className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" /> Call Now
              </a>
            </div>
          </div>
        </section>
        
      </main>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-900 bg-black mt-10 pb-20 md:pb-0">
        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-2">Astrologer Mannu Shastri Ji</h4>
            <p className="text-sm text-zinc-500 max-w-md">Expert in Vedic Astrology, providing genuine solutions to bring happiness back into your life.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="tel:+919928433259" className="text-orange-500 font-bold hover:text-orange-400 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 99284 33259
            </a>
            <p className="text-xs text-zinc-600">Available 24/7 for consultation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { motion } from 'motion/react';
import { Phone, MessageCircle, HeartPulse, ShieldCheck, Users, HeartCrack, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function LoveProblemMumbai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Love Problem Solution in Mumbai | Lost Love Back Specialist",
    "description": "Get the best love problem solution in Mumbai. Trusted by 55,000+ satisfied clients. Instant WhatsApp consultation available.",
    "url": "https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/love-problem-solution-mumbai"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans">
      <SEO 
        title="Love Problem Solution in Mumbai | Lost Love Back Specialist"
        description="Get the best love problem solution in Mumbai. Trusted by 55,000+ satisfied clients. Instant WhatsApp consultation available."
        keywords="love problem solution Mumbai, lost love back Mumbai, relationship problem Mumbai, astrologer in Mumbai"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/love-problem-solution-mumbai"
        structuredData={structuredData}
      />
      
      <Header activePage="mumbai-love" />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col gap-12 py-10 pb-24 md:pb-10">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-center py-12 px-6 sm:py-16 md:py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
            100% Guaranteed Results
          </span>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight max-w-4xl mx-auto mb-6">
            Love Problem Solution in <span className="text-orange-500">Mumbai</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Are you facing relationship problems in Mumbai? We provide powerful and effective love problem solutions to help you fix your relationship and bring happiness back into your life. Trusted by 55,000+ satisfied clients.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="https://wa.me/919928433259?text=I%20need%20love%20problem%20solution%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#25D366]/20 transform hover:scale-105">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <a href="tel:+919928433259" className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-orange-600/20 transform hover:scale-105">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6">Best Astrologer for Love Problem in <span className="text-orange-500">Mumbai</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Our expert guidance helps solve misunderstandings, breakup issues, and emotional problems quickly and effectively. We understand the fast-paced life in Mumbai and offer practical, fast, and 100% confidential solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:+919928433259" className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-700 text-white py-3 px-6 rounded-xl transition-colors font-medium">
                <Phone className="w-4 h-4 text-orange-400" /> Talk to Expert
              </a>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
               <HeartPulse className="w-8 h-8 text-orange-500 mb-4" />
               <h3 className="text-white font-bold mb-2">Fast Results</h3>
               <p className="text-sm text-zinc-400">Time-tested remedies for quick impact.</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
               <ShieldCheck className="w-8 h-8 text-orange-500 mb-4" />
               <h3 className="text-white font-bold mb-2">100% Confidential</h3>
               <p className="text-sm text-zinc-400">Your privacy is fully protected.</p>
             </div>
          </div>
        </section>

        {/* COMMON PROBLEMS CAUSES SECTION */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Common Love <span className="text-orange-500">Problems We Solve</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We provide guidance for all types of relationship and emotional issues.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Breakup & Patch-up", desc: "Resolve breakup issues and patch-up smoothly." },
              { title: "One-Sided Love", desc: "Attract your true love naturally." },
              { title: "Family Opposition", desc: "Overcome family objections for love marriage." },
              { title: "Trust Issues", desc: "Rebuild trust and clear misunderstandings." }
            ].map((prob, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-4">
                <div className="bg-orange-500/20 p-3 rounded-full w-fit">
                  <HeartCrack className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{prob.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href="https://wa.me/919928433259" className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <MessageCircle className="w-5 h-5" /> Contact for Solution
            </a>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Why Choose Our <span className="text-orange-500">Services?</span></h2>
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
               <MessageCircle className="w-10 h-10 text-orange-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">Instant Support</h3>
               <p className="text-sm text-zinc-400">Via WhatsApp</p>
             </div>
             <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center">
               <Star className="w-10 h-10 text-orange-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-white mb-2">Fast Results</h3>
               <p className="text-sm text-zinc-400">Quick solutions</p>
             </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">How It <span className="text-orange-500">Works?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-4 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">1</div>
              <h3 className="text-white font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-zinc-400">On WhatsApp or Call.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">2</div>
              <h3 className="text-white font-bold mb-2">Share Problem</h3>
              <p className="text-sm text-zinc-400">Explain your issue.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">3</div>
              <h3 className="text-white font-bold mb-2">Get Solution</h3>
              <p className="text-sm text-zinc-400">Get personalized guidance.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center relative z-10">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border-4 border-zinc-950">4</div>
              <h3 className="text-white font-bold mb-2">Follow Guidance</h3>
              <p className="text-sm text-zinc-400">See positive results.</p>
            </div>
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-zinc-900 z-0"></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Client <span className="text-orange-500">Testimonials</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl italic relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-4 right-4" />
              <p className="text-zinc-300 mb-4">"Very helpful and accurate guidance. I was completely lost and this helped me immensely."</p>
              <p className="text-sm font-bold text-orange-500">— Verified Client</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl italic relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-4 right-4" />
              <p className="text-zinc-300 mb-4">"I got positive results quickly. Thank you so much for saving my relationship."</p>
              <p className="text-sm font-bold text-orange-500">— Verified Client</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-[2rem] p-8 sm:p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-900/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Get Instant Solution Now</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Do not wait. Take action now and fix your relationship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919928433259?text=I%20need%20love%20problem%20solution" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-orange-600 hover:bg-zinc-100 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-xl">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <a href="tel:+919928433259" className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </section>
        
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-black mt-10 pb-20 md:pb-0">
        <div className="max-w-[1100px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
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

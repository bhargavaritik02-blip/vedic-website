import { motion } from 'motion/react';
import { Phone, MessageCircle, Star, Award, ShieldCheck, Heart, User, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Astrologer Mannu Shastri Ji",
      "description": "Expert guidance and practical solutions for relationship problems, trusted by 55,000+ clients to bring love, trust, and happiness back into their lives."
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans">
      <SEO 
        title="About Us | Trusted Love Problem Specialist"
        description="Learn about our journey to help people find clarity and rebuild relationships. Genuine guidance for relationship problems trusted by 55,000+ happy clients."
        keywords="about us, relationship expert, love problem solution, trusted guidance"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/about"
        structuredData={structuredData}
      />
      <Header activePage="about" />

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col gap-12 py-10 pb-24 md:pb-10">
        
        {/* HERO STORY SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 py-12 px-6 sm:py-16 md:py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center mb-10 relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-8">
              About Us
            </h1>
            
            <div className="text-lg md:text-xl text-zinc-400 space-y-6 leading-relaxed text-left mx-auto">
              <p>
                Every relationship has its ups and downs. Many people go through emotional pain, misunderstandings, and situations where they feel lost and helpless. We started this journey with one simple goal — to help people find clarity, rebuild their relationships, and bring happiness back into their lives.
              </p>
              <p>
                Over time, we realized that most people don’t just need advice — they need someone who understands their situation deeply and guides them with patience and honesty. That is exactly what we focus on.
              </p>
              <p>
                With years of experience and a deep understanding of love and relationship problems, we have successfully helped more than <strong className="text-orange-500 font-bold">55,000+ people</strong> who were struggling with breakups, lost love, and emotional stress.
              </p>
              <p>
                Every person who connects with us has a different story. Some want their lost love back, some want to fix their relationship, and some just need the right direction. We listen carefully, understand the situation, and provide personalized solutions that actually work.
              </p>
              <p>
                We believe in keeping everything completely confidential and genuine. Our goal is not just to give advice, but to help you move forward with confidence and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION & WHY TRUST US SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12">
            <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-3xl font-serif text-white mb-6">Our Mission</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our mission is to help people overcome relationship problems and bring love, trust, and happiness back into their lives through genuine guidance and practical solutions.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12">
            <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-3xl font-serif text-white mb-6">Why People Trust Us</h2>
            <ul className="space-y-4">
              {[
                "55,000+ Happy Clients",
                "100% Confidential Consultation",
                "Personalized Guidance",
                "Instant WhatsApp Support",
                "Genuine & Practical Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-10 max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-4">Real Client <span className="text-orange-500">Experiences</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Here are some real experiences shared by people who trusted us and found results:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
              </div>
              <p className="text-zinc-300 italic text-lg leading-relaxed mb-6">"I was completely broken after my breakup. I didn’t know what to do. After taking guidance, things slowly started improving and today we are back together. Truly grateful."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Verified Client</p>
                  <p className="text-zinc-500 text-xs">India</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
              </div>
              <p className="text-zinc-300 italic text-lg leading-relaxed mb-6">"I was facing serious issues in my relationship. The guidance I received was very clear and helpful. Within a few days, I could see positive changes."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Verified Client</p>
                  <p className="text-zinc-500 text-xs">India</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
              </div>
              <p className="text-zinc-300 italic text-lg leading-relaxed mb-6">"I was confused and stressed about my love life. The support and understanding I received here made a big difference. Highly recommended."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Verified Client</p>
                  <p className="text-zinc-500 text-xs">India</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative">
              <Star className="w-8 h-8 text-orange-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />)}
              </div>
              <p className="text-zinc-300 italic text-lg leading-relaxed mb-6">"Very genuine and supportive. I got quick response on WhatsApp and proper guidance. It really helped me a lot."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Verified Client</p>
                  <p className="text-zinc-500 text-xs">India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TAKE THE FIRST STEP CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-[2rem] p-8 sm:p-10 md:p-16 text-center text-white relative overflow-hidden max-w-6xl mx-auto w-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-900/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Take the First Step</h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              If you are going through a difficult time in your relationship, don’t ignore it. The right guidance at the right time can make a big difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919928433259" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-orange-600 hover:bg-zinc-100 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-xl text-lg">
                <MessageCircle className="w-6 h-6 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <a href="tel:+919928433259" className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors text-lg">
                <Phone className="w-6 h-6" /> Call Now
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

import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Astrologer Mannu Shastri Ji",
    "description": "Get in touch for expert astrology solutions.",
    "telephone": "+919928433259"
  };

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-200 font-sans">
      <SEO 
        title="Contact Us | Astrologer Mannu Shastri Ji"
        description="Contact Astrologer Mannu Shastri Ji for instant consultation. WhatsApp or Call now for the best solutions to your relationship problems."
        keywords="contact astrologer, mannu shastri contact, whatsapp astrologer"
        url="https://ais-pre-yiujbuguleggsehuv2syxt-446001962622.asia-east1.run.app/contact"
        structuredData={structuredData}
      />
      <Header activePage="contact" />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col gap-12 py-10 pb-24 md:pb-10">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 text-center py-12 px-6 sm:py-16 md:py-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight max-w-4xl mx-auto mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We are here to help you solve your love and relationship problems. Reach out to us now for a confidential and instant consultation.
          </p>
        </section>

        {/* CONTACT OPTIONS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
           <a href="https://wa.me/919928433259" target="_blank" rel="noopener noreferrer" className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center transition-colors group">
             <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <MessageCircle className="w-8 h-8 text-[#25D366]" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Us</h3>
             <p className="text-zinc-400 mb-6">Get instant replies and immediate solutions over chat.</p>
             <span className="text-[#25D366] font-bold text-lg">+91 99284 33259</span>
           </a>

           <a href="tel:+919928433259" className="bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center transition-colors group">
             <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Phone className="w-8 h-8 text-orange-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Call Now</h3>
             <p className="text-zinc-400 mb-6">Speak directly with Astrologer Mannu Shastri Ji.</p>
             <span className="text-orange-500 font-bold text-lg">+91 99284 33259</span>
           </a>
        </section>

        {/* ADDRESS SECTION */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-6 sm:p-8 md:p-14 max-w-4xl mx-auto w-full text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <MapPin className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Location</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Sikar, Rajasthan, India
          </p>
          <p className="text-sm text-zinc-500 mt-4 italic">
            Online consultation available worldwide
          </p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-black mt-10 pb-20 md:pb-0">
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

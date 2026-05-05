import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Heart, Star, Shield, Users } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { seoPages } from '../data/seoPages';

export default function SEORoute() {
  const { slug } = useParams();
  const pageData = seoPages.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageData) {
    return <Navigate to="/" replace />; 
  }

  const { title, service, city } = pageData;

  const PHONE_NUMBER = "9928433259";
  const WHATSAPP_LINK = "https://wa.me/919928433259";

  // Get 4 random internal links excluding the current page
  const otherPages = seoPages.filter(p => p.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans">
      <SEO 
        title={`${title} | Guaranteed Results`}
        description={`Get expert ${service} solutions in ${city}. Fast, reliable, and 100% confidential. One call can change your life. Call now at +91 9928433259.`}
        keywords={`${service}, ${service} in ${city}, best ${service} expert, relationship problem solution`}
        url={`https://yourwebsite.com/${slug}`}
      />
      <Header activePage="services" />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {title}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed"
            >
              Are you facing tough times in your life? Do you feel surrounded by negative energies or relationship problems? Our world-renowned expert in {city} provides fast, effective, and guaranteed solutions to bring happiness back into your life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(2eaadd,0.3)] hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call: +91 {PHONE_NUMBER}
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-green-500/30 text-green-400 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-500/10 hover:border-green-500 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-zinc-400 font-medium tracking-wide uppercase"
            >
              ✨ ONE CALL CAN CHANGE YOUR LIFE ✨
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-zinc-950/50 relative border-t border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 mt-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Expert {service} Solutions in {city}</h2>
              
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Life can be unpredictable, and at times, we face challenges that seem insurmountable. Whether it's a sudden breakup, a struggling marriage, continuous financial losses, or the suspected interference of negative elements, finding the path forward is difficult. If you are in {city} and searching for a reliable, highly experienced professional, your search ends here. Our specialized {service} services have helped thousands of individuals overcome their deepest sorrows.
                </p>
                <p>
                  As an established {service} Specialist in {city}, profound ancient techniques and effective modern remedies are utilized to diagnose the root cause of your pain. Rather than offering temporary fixes, we focus on permanent, fast-acting results. If your lover has left you, your family is opposing your marriage, or you feel a sudden downfall in your business, the right guidance can turn the stars in your favor. 
                </p>
                <p>
                  Privacy and confidentiality are our highest priorities. Every consultation is handled with the utmost respect for your situation. Do not let distance or despair keep you from the life you deserve. Many have regained their lost love, protected their families, and achieved success by simply taking the first step. Reach out today to experience a powerful transformation.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-orange-400">Our Comprehensive Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Love Problem Solution</h4>
                      <p className="text-sm text-zinc-400">Fix misunderstandings instantly</p>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Get Lost Love Back</h4>
                      <p className="text-sm text-zinc-400">Reunite with your ex-partner</p>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Marriage Problem Solution</h4>
                      <p className="text-sm text-zinc-400">Resolve family & intercaste issues</p>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Breakup Solution</h4>
                      <p className="text-sm text-zinc-400">Stop divorce and separation</p>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center gap-4 md:col-span-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">Husband Wife Dispute</h4>
                      <p className="text-sm text-zinc-400">Bring harmony back to your marriage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mt-12 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-orange-500/20">
                <h3 className="text-xl font-bold mb-6 text-white">Why Choose Our {service} Service?</h3>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>100% Privacy & Confidentiality</strong> - Your personal details and problems are kept completely secure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Fast & Effective Results</strong> - Experience positive changes within a short and predictable time frame.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Expert Guidance</strong> - Years of specialized experience in diagnosing and resolving complex astrological and relationship issues.</span>
                  </li>
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-orange-400 mb-2">How fast can I see results for {service}?</h4>
                    <p className="text-zinc-400">The time for results can vary depending on the complexity of your situation, but many of our clients start observing positive shifts very quickly after implementing the suggested remedies.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-400 mb-2">Can you help with {service} remotely from {city}?</h4>
                    <p className="text-zinc-400">Absolutely. Spiritual energies and astrological remedies work regardless of physical distance. We have successfully assisted clients globally through careful consultation.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-400 mb-2">Is the consultation confidential?</h4>
                    <p className="text-zinc-400">Yes, 100%. We value your trust over everything. Every detail shared during your consultation for {service} is kept strictly between you and the expert.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-16 bg-black border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">People Also Search For</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherPages.map((page, idx) => (
                <Link 
                  key={idx} 
                  to={`/${page.slug}`}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:bg-zinc-800 rounded-full text-zinc-300 hover:text-white transition-all text-sm md:text-base font-medium"
                >
                  {page.title}
                </Link>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-zinc-500 mb-6">Don't wait. A single consultation could be the turning point of your life.</p>
              <div className="flex justify-center gap-4">
                 <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-full font-bold transition-colors"
                >
                  Call Now
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-zinc-800 text-white hover:bg-zinc-700 rounded-full font-bold transition-colors"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-zinc-900 px-4 mt-8 gap-4">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest text-center sm:text-left">
          Vedic Wisdom & Spiritual Support
        </p>
        <p className="text-[10px] text-zinc-600 italic text-center sm:text-right max-w-xl">
          Disclaimer: All consultations are based on traditional Vedic knowledge and personal guidance. Results may vary depending on individual circumstances. Client privacy is strictly maintained.
        </p>
      </footer>
    </div>
  );
}

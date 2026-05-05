import { Phone } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { motion } from 'motion/react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-6 left-0 w-full px-6 z-50 md:hidden flex justify-between pointer-events-none">
      <motion.a 
        href="tel:+919928433259" 
        className="w-14 h-14 bg-orange-600 outline-none text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-600/40 pointer-events-auto relative group"
        aria-label="Call Now"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute w-full h-full rounded-full bg-orange-600 opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <Phone className="w-6 h-6 animate-[bounce_2s_infinite]" />
      </motion.a>
      <motion.a 
        href="https://wa.me/919928433259" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 pointer-events-auto relative group flex-shrink-0"
        aria-label="WhatsApp Us"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <WhatsappIcon className="w-7 h-7 text-white animate-[bounce_2s_infinite]" />
      </motion.a>
    </div>
  );
}

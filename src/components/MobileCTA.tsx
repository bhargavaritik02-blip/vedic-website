import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-6 left-0 w-full px-6 z-50 md:hidden flex justify-between pointer-events-none">
      <a 
        href="tel:+919928433259" 
        className="w-14 h-14 bg-orange-600 outline-none text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-600/40 pointer-events-auto transform hover:scale-105 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/919928433259" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 pointer-events-auto transform hover:scale-105 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function FreeConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const triggerPopup = () => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    timeoutId = setTimeout(() => {
      triggerPopup();
    }, 4000); // 4 seconds

    const handleScroll = () => {
      if (hasShown) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (scrollHeight > 0 && scrolled / scrollHeight > 0.3) {
        triggerPopup();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isOpen, timeLeft]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[400px] bg-zinc-950 border border-zinc-800 rounded-[20px] p-6 shadow-2xl flex flex-col items-center text-center overflow-hidden z-10 mx-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors flex items-center justify-center focus:outline-none min-h-[44px] min-w-[44px]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/5 border border-orange-500/20 rounded-full flex items-center justify-center mb-5 shadow-inner text-4xl">
              ⏱️
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 leading-tight">
              Limited Time Free Consultation
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-300 mb-5 px-2">
              You have a limited-time free astrology consultation available.
            </p>

            <div className="bg-black border border-zinc-800 rounded-xl px-6 py-4 mb-5 w-full flex flex-col items-center justify-center shadow-inner">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-1.5">Offer Expires In</span>
              {timeLeft > 0 ? (
                <span className="text-4xl font-mono font-bold text-orange-500 tracking-wider">
                  {timeString}
                </span>
              ) : (
                <span className="text-xl font-bold text-zinc-500">
                  Offer expired
                </span>
              )}
            </div>

            <p className="text-xs text-orange-400 font-medium mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Only a few slots left today
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://wa.me/919928433259?text=Hello,%20I%20want%20to%20claim%20my%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
                className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(37,211,102,0.2)] text-base group"
              >
                <WhatsappIcon className="w-5 h-5 group-hover:animate-[bounce_1s_infinite]" />
                Get Free Consultation
              </a>
              
              <button
                onClick={closePopup}
                className="w-full min-h-[48px] bg-transparent border border-zinc-800 hover:bg-zinc-900 text-zinc-400 font-medium py-3 px-6 rounded-xl transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, MessageCircle } from 'lucide-react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem('popupShown');
    if (hasShown) return;

    let timeoutId: NodeJS.Timeout;

    const showPopup = () => {
      if (!localStorage.getItem('popupShown')) {
        setIsOpen(true);
        localStorage.setItem('popupShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      if (documentHeight > windowHeight * 1.5) {
        const scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
        if (scrolledPercentage >= 40) {
          showPopup();
        }
      }
    };

    // Show after 9 seconds OR on 40% scroll
    timeoutId = setTimeout(showPopup, 9000);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || isExpired) return;

    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isOpen, timeLeft, isExpired]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
            onClick={closePopup}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header pattern */}
            <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-r from-red-600 to-amber-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            </div>

            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pt-28 px-6 pb-8 sm:px-8 text-center relative z-10">
              
              <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-900 rounded-full shadow-lg flex items-center justify-center border-4 border-zinc-900 z-20">
                <Clock className="w-8 h-8 text-red-600 animate-pulse" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 mt-4">
                Limited Time<br/>Free Consultation
              </h2>
              
              <p className="text-zinc-400 mb-6 leading-relaxed">
                You have a limited time offer for FREE astrology consultation. Grab it now before it expires!
              </p>

              <div className="bg-amber-50 rounded-2xl p-4 mb-6 border border-amber-200 shadow-inner">
                <p className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-2">Offer expires in</p>
                {isExpired ? (
                  <p className="text-2xl font-bold text-red-600 uppercase tracking-wide">Offer expired</p>
                ) : (
                  <p className="text-4xl font-mono font-bold text-red-600 tabular-nums tracking-tight">
                    {formatTime(timeLeft)}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/919928433259?text=I%20want%20to%20claim%20my%20limited%20time%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl transition-all shadow-lg text-white text-[17px] ${
                    isExpired 
                      ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                      : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 hover:-translate-y-0.5 shadow-red-600/30'
                  }`}
                  onClick={(e) => {
                    if (isExpired) e.preventDefault();
                    else closePopup();
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Consultation
                </a>
                <button 
                  onClick={closePopup}
                  className="w-full py-3 px-6 text-zinc-500 font-semibold hover:text-zinc-200 hover:bg-zinc-900 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

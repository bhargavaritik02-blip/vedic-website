import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, MessageSquare, Star, Clock } from 'lucide-react';

const names = ["Rohit", "Priya", "Amit", "Neha", "Vikram", "Anjali", "Suresh", "Kavita", "Raj", "Pooja", "Arjun", "Simran", "Rahul", "Sneha"];
const actions = [
  "explored their horoscope", 
  "checked today's reading", 
  "generated personal kundli", 
  "checked daily rashifal",
  "is reading about love solutions",
  "consulted for a relationship issue"
];
const generic = [
  "Someone checked today's rashifal", 
  "A user explored horoscope", 
  "Someone is reading about love solutions",
  "A user generated their Kundli",
  "Someone is looking for marriage solutions"
];
const times = ["just now", "just now", "1 min ago", "1 min ago", "2 min ago"];

export default function LiveActivityChat() {
  const [viewers, setViewers] = useState(Math.floor(Math.random() * (28 - 12 + 1)) + 12);
  const [dailyCount, setDailyCount] = useState(Math.floor(Math.random() * (70 - 35 + 1)) + 35);
  const [currentMessage, setCurrentMessage] = useState<{ text: string, time: string } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const recentMessages = useRef<string[]>([]);

  useEffect(() => {
    if (!isVisible) return;

    // Viewers update every 12-18s
    const viewerInterval = setInterval(() => {
      setViewers(Math.floor(Math.random() * (28 - 12 + 1)) + 12);
    }, Math.floor(Math.random() * 6000) + 12000);

    // Daily count increases slowly
    const dailyInterval = setInterval(() => {
      setDailyCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.floor(Math.random() * 20000) + 30000);

    // Chat popup every 20-25s
    const chatInterval = setInterval(() => {
      let isGeneric = Math.random() > 0.4;
      let newMsgText = "";
      
      let attempts = 0;
      do {
        if (isGeneric) {
          newMsgText = generic[Math.floor(Math.random() * generic.length)];
        } else {
          const newName = names[Math.floor(Math.random() * names.length)];
          const action = actions[Math.floor(Math.random() * actions.length)];
          newMsgText = `${newName} ${action}`;
        }
        attempts++;
      } while (recentMessages.current.includes(newMsgText) && attempts < 10);

      recentMessages.current.push(newMsgText);
      if (recentMessages.current.length > 3) {
        recentMessages.current.shift();
      }

      const time = times[Math.floor(Math.random() * times.length)];
      
      setCurrentMessage({ text: newMsgText, time });
      
      // Auto hide after 4 seconds
      setTimeout(() => {
        setCurrentMessage(null);
      }, 4000);

    }, Math.floor(Math.random() * 5000) + 20000);

    // Initial message
    setTimeout(() => {
      setCurrentMessage({ 
        text: generic[Math.floor(Math.random() * generic.length)], 
        time: "just now" 
      });
      setTimeout(() => setCurrentMessage(null), 4000);
    }, 3000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(dailyInterval);
      clearInterval(chatInterval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-[90px] left-0 right-0 mx-auto w-[92%] max-w-[340px] md:w-[320px] md:bottom-[190px] md:left-auto md:right-8 z-[60] flex flex-col gap-2 pointer-events-none">
      
      <AnimatePresence mode="popLayout">
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full bg-zinc-900/95 border border-zinc-700/50 rounded-xl p-3 shadow-lg shadow-black/40 backdrop-blur-md pointer-events-auto flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/20">
              <Star className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex-1 mt-0.5">
              <p className="text-[13px] md:text-[14px] text-zinc-100 leading-snug">
                {currentMessage.text}
              </p>
              <p className="text-[10px] text-zinc-500 mt-1.5 flex items-center gap-1 font-medium">
                <Clock className="w-3 h-3" /> {currentMessage.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md pointer-events-auto relative"
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-zinc-500 hover:text-white transition-colors p-2 md:p-1.5 rounded-full hover:bg-zinc-800 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center -mt-1 -mr-1"
          aria-label="Close activity"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex flex-col gap-2.5 pr-8">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20 shrink-0">
              <Eye className="w-3.5 h-3.5 text-orange-500" />
            </div>
            <span className="text-[13px] text-zinc-300 leading-tight">
              <strong className="text-white font-bold">{viewers}</strong> people are exploring readings
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 rounded-lg p-2 mt-1 animate-[pulse_3s_ease-in-out_infinite]">
            <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 shrink-0">
              <MessageSquare className="w-3.5 h-3.5 text-green-500" />
            </div>
            <span className="text-[13px] text-green-100 leading-tight">
              <strong className="text-green-400 font-bold">{dailyCount}</strong> checked readings today
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

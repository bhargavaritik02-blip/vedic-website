import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, CheckCircle2 } from 'lucide-react';

const activities = [
  "Rahul from Delhi just consulted for Love Problem.",
  "Sneha from Mumbai booked a Kundli Reading.",
  "Amit from Pune is chatting with Astrologer.",
  "Priya from Jaipur got a Relationship Solution.",
  "Karan from Bangalore just checked Daily Rashifal."
];

export default function LiveActivity() {
  const [currentActivity, setCurrentActivity] = useState<string | null>(null);

  useEffect(() => {
    const showActivity = () => {
      const index = Math.floor(Math.random() * activities.length);
      setCurrentActivity(activities[index]);
      
      // Hide after 4 seconds
      setTimeout(() => {
        setCurrentActivity(null);
      }, 4000);
    };

    // Initial delay then show every 20 seconds
    const interval = setInterval(() => {
      showActivity();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {currentActivity && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          className="fixed bottom-4 left-4 z-40 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl p-3 flex items-center gap-3 max-w-xs"
        >
          <div className="bg-green-500/10 p-2 rounded-full shrink-0">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-xs text-zinc-300">
            {currentActivity}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

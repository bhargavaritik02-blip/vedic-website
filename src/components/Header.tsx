import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SearchBar from './SearchBar';
import WhatsappIcon from './WhatsappIcon';

interface HeaderProps {
  activePage: 'home' | 'services' | 'horoscope' | 'jaipur-love' | 'mumbai-love' | 'india-love' | 'about' | 'contact';
}

export default function Header({ activePage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Free Horoscope', path: '/horoscope', id: 'horoscope' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-4 flex items-center justify-between relative z-50">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img loading="lazy" src="https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg" alt="Astrologer Mannu Shastri" className="w-10 h-10 rounded-full object-cover border border-orange-600/50" />
          <div className="flex flex-col">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-orange-400 transition-colors truncate">Astrologer Mannu Shastri</h1>
            <span className="text-[10px] text-orange-500 uppercase tracking-widest font-semibold">Love & Relationship Healer ❤️</span>
          </div>
        </Link>
        
        {/* Desktop Search & Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <SearchBar />
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.id} to={link.path} className={`text-sm font-medium transition-colors ${activePage === link.id ? 'text-orange-500 border-b border-orange-500 pb-0.5' : 'text-zinc-300 hover:text-orange-400'}`}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu button and Search (Search is visible on tablet/mobile but not inside hamburger, actually let's put search outside or inside? Outside is fine as there's space) */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="hidden sm:block">
            <SearchBar />
          </div>
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-2xl py-4 flex flex-col px-4 z-40"
          >
            <div className="mb-4 sm:hidden block">
              <SearchBar />
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.id} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium p-2 rounded-lg transition-colors ${activePage === link.id ? 'text-orange-500 bg-orange-500/10' : 'text-zinc-300 hover:text-orange-400 hover:bg-zinc-900'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
               <a href="tel:+919928433259" className="w-full bg-zinc-900 border border-zinc-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                   Call Now
               </a>
               <a href="https://wa.me/919928433259" className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2">
                   WhatsApp Hub
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <div className="top-marquee">
      <div className="marquee-content">
        ⚠️ धोखा खाया है? अब पाएँ सही मार्गदर्शन 🔮 — तुरंत संपर्क करें 📞 <strong className="text-yellow-300 tracking-wider">+91-9928433259</strong> 💬✨ &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; ⚠️ Been misled before? Get genuine guidance 🔮 — call now 📞 <strong className="text-yellow-300 tracking-wider">+91-9928433259</strong> 💬✨
      </div>
    </div>
    </>
  );
}

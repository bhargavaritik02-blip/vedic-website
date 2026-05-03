import { useState, useRef, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const searchData = [
  { title: "Free Vedic Horoscope", path: "/horoscope", keywords: ["horoscope", "kundli", "reading", "astrology", "future"] },
  { title: "Love Problem Solution in Jaipur", path: "/love-problem-solution-jaipur", keywords: ["jaipur", "love problem", "relationship", "issues", "fights", "misunderstanding"] },
  { title: "Love Problem Solution in Mumbai", path: "/love-problem-solution-mumbai", keywords: ["mumbai", "love problem", "relationship", "issues", "fights", "misunderstanding"] },
  { title: "Lost Love Back Specialist", path: "/lost-love-back-india", keywords: ["lost love", "ex", "return", "lover", "breakup"] },
  { title: "Our Services", path: "/services", keywords: ["services", "love problem", "breakup solution", "husband/wife", "marriage problem"] },
  { title: "About Astrologer Mannu Shastri", path: "/about", keywords: ["about", "experience", "biography", "expert"] },
  { title: "Contact on WhatsApp", path: "/contact", keywords: ["contact", "chat", "message", "help", "consultation"] }
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredData = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return searchData.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (query.trim() !== "" && filteredData.length > 0) {
      navigate(filteredData[0].path);
      setIsOpen(false);
      setQuery("");
    }
  };

  // Helper to highlight matching text
  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <span key={i} className="text-orange-500 font-bold bg-orange-500/10 rounded px-0.5">{part}</span> : part
    );
  };

  return (
    <div className="relative w-full sm:w-auto" ref={wrapperRef}>
      <form 
        onSubmit={handleSearch}
        className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-full px-3 py-1 focus-within:border-orange-500/50 transition-colors"
      >
        <input 
          type="text" 
          placeholder="Search..." 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="bg-transparent border-none outline-none text-sm text-zinc-200 placeholder:text-zinc-500 w-full sm:w-32 md:w-48 transition-all py-1.5 px-1"
        />
        <button 
          type="submit" 
          className="p-1.5 hover:bg-zinc-700/50 rounded-full transition-colors shrink-0" 
          onClick={handleSearch}
        >
          <Search className="w-4 h-4 text-orange-500" />
        </button>
      </form>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-2 w-full min-w-[280px] sm:right-0 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden z-50">
          {filteredData.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto py-2">
              {filteredData.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-orange-400 transition-colors border-b border-zinc-800/50 last:border-0"
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                  >
                    <div className="font-medium">{highlightMatch(item.title, query)}</div>
                    {item.keywords.some(kw => kw.toLowerCase().includes(query.toLowerCase())) && (
                      <div className="text-xs text-zinc-500 mt-1 flex gap-1 flex-wrap">
                        {item.keywords.filter(kw => kw.toLowerCase().includes(query.toLowerCase())).map((kw, i) => (
                          <span key={i} className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">
                            {highlightMatch(kw, query)}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-4 text-sm text-zinc-400 text-center">
              No results found. Please try another keyword.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

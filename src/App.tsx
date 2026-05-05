import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import LoveProblemJaipur from './pages/LoveProblemJaipur';
import LostLoveBackIndia from './pages/LostLoveBackIndia';
import LoveProblemMumbai from './pages/LoveProblemMumbai';
import Horoscope from './pages/Horoscope';
import About from './pages/About';
import Contact from './pages/Contact';
import MobileCTA from './components/MobileCTA';
import FreeConsultationPopup from './components/FreeConsultationPopup';
import LiveActivityChat from './components/LiveActivityChat';
import SEORoute from './pages/SEORoute';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/love-problem-solution-jaipur" element={<LoveProblemJaipur />} />
        <Route path="/lost-love-back-india" element={<LostLoveBackIndia />} />
        <Route path="/love-problem-solution-mumbai" element={<LoveProblemMumbai />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<SEORoute />} />
      </Routes>
      <MobileCTA />
      <FreeConsultationPopup />
      <LiveActivityChat />
    </BrowserRouter>
  );
}

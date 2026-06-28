import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import CallButton from './components/ui/CallButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScrollToTop from './components/utils/ScrollToTop';
import SplashScreen from './components/ui/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2300); // Wait for the fade-out animation to complete (1.5s delay + 0.8s duration)
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        {showSplash && <SplashScreen />}
        <div className={`min-h-screen flex flex-col font-body text-brand-navy bg-brand-white transition-opacity duration-700 ${showSplash ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<div>Privacy Policy</div>} />
              <Route path="/terms" element={<div>Terms & Conditions</div>} />
            </Routes>
          </main>

          <Footer />
          
          <WhatsAppButton />
          <CallButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

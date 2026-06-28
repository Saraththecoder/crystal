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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-body text-brand-navy bg-brand-white">
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

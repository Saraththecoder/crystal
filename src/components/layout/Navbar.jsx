import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-white/70 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] sticky top-0 z-50 border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img src={logoImage} alt="Crystal Maid Logo" className="h-10 sm:h-12 md:h-16 w-auto mix-blend-multiply transform hover:scale-105 transition-transform duration-300" />
              <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-brand-navy">Crystal <span className="text-brand-gold">Maid</span></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`font-medium transition-colors hover:text-brand-royal ${location.pathname === link.path ? 'text-brand-royal border-b-2 border-brand-gold' : 'text-brand-navy'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-royal text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-navy transition-colors shadow-md"
            >
              Book Now
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-royal focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-white/90 backdrop-blur-xl absolute w-full shadow-lg border-b border-white/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === link.path ? 'text-brand-royal bg-brand-grey' : 'text-brand-navy hover:text-brand-royal hover:bg-brand-grey'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-brand-royal text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-navy transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-brand-grey pt-16 pb-32 md:pb-12 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-display font-bold text-3xl mb-6 block">Crystal <span className="text-brand-gold">Maid</span></span>
            <p className="text-brand-greyText text-sm leading-relaxed mb-6">
              Bengaluru's most trusted premium domestic staffing service. Verified staff, quick replacements, and peace of mind for your family.
            </p>
            <div className="flex space-x-4 text-brand-gold">
              <a href="#" className="hover:text-brand-white transition-colors" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-brand-white transition-colors" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-brand-white transition-colors" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-brand-greyText pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-brand-greyText hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="text-brand-greyText hover:text-brand-gold transition-colors">Pricing</Link></li>
              <li><Link to="/careers" className="text-brand-greyText hover:text-brand-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-brand-greyText hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-brand-greyText pb-2 inline-block">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">House Maid</Link></li>
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">Professional Cook</Link></li>
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">Baby Care</Link></li>
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">Japa Maid</Link></li>
              <li><Link to="/services" className="text-brand-greyText hover:text-brand-gold transition-colors">Patient Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 border-b border-brand-greyText pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-brand-greyText text-sm">123, Service Road, HSR Layout, Bengaluru, Karnataka 560102</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-gold mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-brand-greyText hover:text-brand-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@crystalmaid.com" className="text-brand-greyText hover:text-brand-gold transition-colors">info@crystalmaid.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-greyText pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-greyText">
          <p>&copy; {new Date().getFullYear()} Crystal House Maid Service. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

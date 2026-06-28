import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, image, to = "/services" }) => {
  return (
    <div className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-all duration-500 border border-white/60 hover:border-brand-gold/50 overflow-hidden flex flex-col h-full transform hover:-translate-y-2 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {image && (
        <div className="h-56 w-full overflow-hidden relative border-b border-brand-grey/30">
          <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
          <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
        </div>
      )}

      <div className="p-8 flex-grow relative z-20 bg-transparent">
        <div className="bg-white/80 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-brand-royal mb-6 group-hover:bg-brand-royal group-hover:text-brand-white transition-colors duration-500 shadow-sm border border-white/50">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-royal transition-colors">{title}</h3>
        <p className="text-brand-greyText text-base leading-relaxed mb-6">{description}</p>
      </div>
      
      <div className="px-6 md:px-8 pb-8 mt-auto relative z-20 bg-transparent flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <Link 
          to={to}
          className="inline-flex items-center text-brand-royal font-bold hover:text-brand-gold transition-colors group/link text-sm md:text-base w-full sm:w-auto"
        >
          Learn more <ArrowRight size={18} className="ml-1 group-hover/link:translate-x-2 transition-transform duration-300" />
        </Link>
        <div className="flex space-x-2">
            <a href={`https://wa.me/919876543210?text=I%20want%20to%20book%20${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2.5 rounded-full hover:scale-110 hover:shadow-lg transition-all" aria-label={`Book ${title} via WhatsApp`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18" height="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a href="tel:+919876543210" className="bg-brand-royal text-white p-2.5 rounded-full hover:scale-110 hover:shadow-lg transition-all" aria-label={`Call for ${title}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="18" height="18"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import { Star } from 'lucide-react';

const TestimonialCard = ({ name, location, quote, rating = 5 }) => {
  return (
    <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/60 relative h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
      <div className="flex text-brand-gold mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill={i < rating ? "currentColor" : "none"} className={i >= rating ? "text-brand-grey" : ""} />
        ))}
      </div>
      <p className="text-brand-navy/80 text-lg italic mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center border-t border-brand-grey/40 pt-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-brand-royal flex items-center justify-center font-bold text-lg mr-3 shadow-sm">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-brand-navy text-base">{name}</h4>
          <span className="text-brand-greyText text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon, Utensils, Baby, HeartPulse, ShieldCheck, SprayCan, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';

import heroImage from '../assets/hero_maid.png';
import serviceCleaning from '../assets/service_cleaning.png';
import serviceCooking from '../assets/service_cooking.png';
import serviceCare from '../assets/service_care.png';

const serviceDetails = [
  { 
    id: "house-maid",
    icon: HomeIcon, 
    title: 'House Maid', 
    description: 'Our house maids are trained to handle all your daily chores efficiently. From sweeping and mopping to dusting and organizing, they ensure your home remains spotless and welcoming.',
    who: 'Ideal for working couples, large families, and individuals seeking a hassle-free lifestyle.',
    image: serviceCleaning
  },
  { 
    id: "cook",
    icon: Utensils, 
    title: 'Professional Cook', 
    description: 'Enjoy delicious, home-cooked meals tailored to your dietary preferences. Our cooks are experienced in various cuisines and maintain the highest standards of hygiene in your kitchen.',
    who: 'Perfect for busy professionals and families who want healthy, freshly prepared meals without the effort.',
    image: serviceCooking
  },
  { 
    id: "baby-care",
    icon: Baby, 
    title: 'Baby Care', 
    description: 'We provide compassionate and experienced nannies who understand child development and safety. They engage your children in constructive activities while ensuring their well-being.',
    who: 'Best suited for working parents needing reliable and loving care for their infants and toddlers.',
    image: serviceCare
  },
  { 
    id: "japa-maid",
    icon: HeartPulse, 
    title: 'Japa Maid', 
    description: 'Specialized postnatal care for new mothers and newborns. Our Japa maids assist with baby massage, bathing, and maternal recovery, following traditional and safe practices.',
    who: 'Essential for new mothers requiring support and rest during the crucial postpartum period.',
    image: serviceCare
  },
  { 
    id: "patient-care",
    icon: ShieldCheck, 
    title: 'Patient Care', 
    description: 'Dedicated and empathetic caretakers for the elderly and those recovering from illnesses. They assist with daily activities, medication reminders, and provide companionship.',
    who: 'Ideal for families needing professional assistance for elderly parents or recovering family members.',
    image: heroImage
  },
  { 
    id: "deep-cleaning",
    icon: SprayCan, 
    title: 'Deep Cleaning', 
    description: 'Comprehensive, top-to-bottom cleaning services using professional-grade equipment and eco-friendly products to rejuvenate your living space.',
    who: 'Great for festive preparations, move-in/move-out scenarios, or an annual home refresh.',
    image: serviceCleaning
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Crystal House Maid Service</title>
        <meta name="description" content="Explore our range of domestic staffing services including house maids, cooks, baby care, Japa maids, and patient care in Bengaluru." />
      </Helmet>

      <section className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-royal opacity-20 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl text-brand-white mb-4">Our Services</h1>
          <p className="text-xl text-brand-offwhite opacity-90 max-w-2xl mx-auto">Premium, verified, and reliable domestic help tailored for your home.</p>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div key={service.id} className={`group bg-brand-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-grey/50 overflow-hidden flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} hover:-translate-y-1`}>
                
                {/* Image Section */}
                <div className="md:w-5/12 relative overflow-hidden min-h-[300px] md:min-h-full">
                  <div className="absolute inset-0 bg-brand-navy/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  
                  {/* Floating Icon Badge */}
                  <div className={`absolute top-6 ${index % 2 !== 0 ? 'left-6' : 'right-6'} bg-brand-white p-4 rounded-2xl shadow-xl z-20 text-brand-royal transform group-hover:rotate-12 transition-transform duration-500`}>
                    <service.icon size={36} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center relative bg-brand-white">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-gold opacity-5 rounded-full blur-2xl"></div>
                  <h3 className="text-3xl font-display font-bold text-brand-navy mb-6 group-hover:text-brand-royal transition-colors">{service.title}</h3>
                  <p className="text-brand-greyText text-lg mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="bg-brand-offwhite p-5 rounded-xl border-l-4 border-brand-gold mb-8 shadow-inner">
                    <span className="font-bold text-brand-navy flex items-center mb-2">
                      <CheckCircle size={20} className="text-brand-gold mr-2" /> Who it's for:
                    </span>
                    <span className="text-brand-greyText">{service.who}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
                    <Link 
                      to="/pricing" 
                      className="inline-flex items-center justify-center bg-brand-navy text-brand-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      View Pricing
                    </Link>
                    <a 
                      href={`https://wa.me/919876543210?text=I%20want%20to%20book%20${encodeURIComponent(service.title)}`} 
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#20b858] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+919876543210"
                      className="inline-flex items-center justify-center bg-brand-royal text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-navy transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import serviceCareImage from '../assets/service_care.png';

const pricingPlans = [
  {
    title: 'House Maid',
    price: '₹8,000',
    period: '/month',
    features: ['Sweeping & Mopping', 'Dusting', 'Utensil Cleaning', 'Bathroom Cleaning', '8 Hours/Day'],
    popular: true
  },
  {
    title: 'Professional Cook',
    price: '₹10,000',
    period: '/month',
    features: ['2 Meals/Day Preparation', 'Grocery Management', 'Kitchen Cleanup', 'Customized Menu', 'Hygiene Assured'],
    popular: false
  },
  {
    title: 'Baby Care',
    price: '₹15,000',
    period: '/month',
    features: ['Feeding & Bathing', 'Engaging Activities', 'Sleep Management', 'Baby Laundry', '10 Hours/Day'],
    popular: false
  },
  {
    title: '24/7 Live-in Maid',
    price: '₹22,000',
    period: '/month',
    features: ['All Household Chores', 'Basic Cooking', 'Round the Clock Availability', 'Weekly 1 Day Off', 'Accommodation Required'],
    popular: true
  }
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Crystal House Maid Service</title>
        <meta name="description" content="Transparent and competitive pricing for house maids, cooks, and caretakers in Bengaluru." />
      </Helmet>

      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-brand-white mb-4">Transparent Pricing</h1>
          <p className="text-xl text-brand-offwhite opacity-90 max-w-2xl mx-auto">Competitive rates for premium, verified domestic staff.</p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-brand-offwhite">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Estimated Monthly Rates" subtitle="Prices may vary based on exact requirements, working hours, and location." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-[2rem] p-8 border relative flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-brand-gold shadow-[0_20px_50px_rgba(201,168,76,0.15)] transform md:-translate-y-4 z-10' : 'border-brand-grey shadow-[0_10px_30px_rgba(10,31,68,0.04)] hover:border-brand-gold/50 hover:shadow-xl'}`}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-navy text-sm font-bold uppercase py-1.5 px-6 rounded-full shadow-lg whitespace-nowrap border border-brand-white/50">
                    Most Popular
                  </span>
                )}
                
                <h3 className={`text-2xl font-display font-bold mb-2 text-center mt-4 ${plan.popular ? 'text-brand-gold' : 'text-brand-navy'}`}>{plan.title}</h3>
                
                <div className="text-center mb-8 pb-8 border-b border-brand-grey/50">
                  <span className="text-4xl font-bold text-brand-navy">Starting {plan.price}</span>
                  <span className="text-brand-greyText font-medium block mt-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-5 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-brand-royal/10 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="text-brand-royal w-4 h-4 flex-shrink-0" />
                      </div>
                      <span className="text-brand-navy/80 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/919876543210?text=I%20want%20a%20custom%20quote%20for%20${encodeURIComponent(plan.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg ${plan.popular ? 'bg-brand-royal text-brand-white hover:bg-brand-navy' : 'bg-white/80 text-brand-navy hover:bg-brand-gold hover:text-brand-navy border border-white/50'}`}
                >
                  Get Custom Quote
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-[#0A1F44] p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(10,31,68,0.2)] relative overflow-hidden flex flex-col md:flex-row items-center text-left">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-royal to-brand-gold z-10"></div>
            
            <div className="md:w-2/3 md:pr-10 relative z-10 text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-3xl font-display font-bold text-brand-white mb-4">Need a Tailored Package?</h4>
              <p className="text-brand-offwhite/80 text-lg mb-8">We understand that every household is unique. Contact us directly to discuss your specific requirements and get a highly customized quotation that fits your lifestyle.</p>
              <a 
                href="tel:+919876543210"
                className="inline-block bg-brand-gold text-[#0A1F44] px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-goldLight transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Call Us to Discuss
              </a>
            </div>
            
            <div className="md:w-1/3 relative z-10">
              <img src={serviceCareImage} alt="Tailored Services" className="rounded-2xl object-cover w-full h-64 border-4 border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

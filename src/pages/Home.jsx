import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Clock, Sparkles, Star, ChevronRight, Home as HomeIcon, Baby, HeartPulse, Utensils, SprayCan } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/cards/ServiceCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import SectionHeader from '../components/ui/SectionHeader';
import TrustBadge from '../components/ui/TrustBadge';
import Marquee from '../components/ui/Marquee';

// Import newly generated images
import heroImage from '../assets/hero_maid.png';
import serviceCleaning from '../assets/service_cleaning.png';
import serviceCooking from '../assets/service_cooking.png';
import serviceCare from '../assets/service_care.png';

const services = [
  { icon: HomeIcon, title: 'House Maid', description: 'Reliable and verified maids for your daily household chores.', image: serviceCleaning },
  { icon: Utensils, title: 'Professional Cook', description: 'Experienced cooks who can prepare delicious and healthy meals.', image: serviceCooking },
  { icon: Baby, title: 'Baby Care', description: 'Trained and compassionate nannies to take care of your little ones.', image: serviceCare },
  { icon: HeartPulse, title: 'Japa Maid', description: 'Specialized postnatal care for new mothers and newborns.', image: serviceCare },
  { icon: ShieldCheck, title: 'Patient Care', description: 'Dedicated caretakers for elderly and recovering patients.', image: heroImage },
  { icon: SprayCan, title: 'Deep Cleaning', description: 'Comprehensive home cleaning services by experts.', image: serviceCleaning },
];

const testimonials = [
  { name: 'Priya S.', location: 'Indiranagar, Bengaluru', quote: 'Crystal Maid provided us with a fantastic cook. The background verification gave us immense peace of mind.', rating: 5 },
  { name: 'Rahul M.', location: 'HSR Layout, Bengaluru', quote: 'Very professional service. The replacement process was quick when our maid had to take a leave.', rating: 5 },
  { name: 'Anjali K.', location: 'Whitefield, Bengaluru', quote: 'The baby care staff is well-trained and very affectionate. Highly recommended for working parents.', rating: 5 },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Crystal House Maid Service | Best Maid Agency in Bengaluru</title>
        <meta name="description" content="Premium domestic staffing site in Bengaluru. Get verified house maids, cooks, baby caretakers, and patient care staff. Book a free consultation today!" />
      </Helmet>

      {/* Hero Section - 2 Column Layout (Left Image, Right Matter) */}
      <section className="relative bg-brand-white overflow-hidden pt-8 pb-16 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-gold opacity-5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-brand-royal opacity-5 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Side: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-brand-navy/10 z-10"></div>
                <img src={heroImage} alt="Premium Living Room" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-royal rounded-full opacity-20 blur-xl"></div>
            </motion.div>

            {/* Right Side: Matter */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="inline-block bg-brand-gold/10 text-brand-gold font-bold px-4 py-2 rounded-full text-sm mb-6 uppercase tracking-wider">
                Bengaluru's #1 Rated Agency
              </div>
              <h1 className="mb-6 leading-snug text-3xl md:text-5xl lg:text-6xl text-brand-navy">
                Premium & Trusted <span className="text-brand-royal block mt-2">Domestic Staff</span> for your home
              </h1>
              <p className="text-xl text-brand-greyText mb-10 leading-relaxed">
                Meticulously verified maids, chefs, and caretakers. We bring unparalleled professionalism, quick replacements, and absolute peace of mind.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20maid%20now"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-royal text-brand-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  Book a Maid Now <ChevronRight className="ml-2" size={20} />
                </a>
                <a 
                  href="tel:+919876543210"
                  className="w-full sm:w-auto bg-brand-white border-2 border-brand-gold text-brand-navy px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-brand-gold hover:text-brand-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-md"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Premium Text Marquee */}
      <section className="bg-brand-navy border-y border-brand-gold/30 relative z-20 shadow-[0_0_20px_rgba(201,168,76,0.15)]">
        <Marquee speed="normal" className="text-brand-white/90 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> 100% Background Verified</span>
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> Premium Cook Services</span>
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> Professional Baby Care</span>
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> Elderly Care Specialists</span>
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> Japa Maid Services</span>
          <span className="flex items-center"><Star className="inline mr-3 text-brand-gold" size={16} /> Deep Cleaning Experts</span>
        </Marquee>
      </section>

      {/* Trust Bar Redesign */}
      <section className="py-16 md:py-20 bg-brand-navy relative z-20 overflow-hidden shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:divide-x divide-white/10"
          >
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } } }}>
              <TrustBadge icon={Star} stat="4+" label="Years Exp." />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } } }}>
              <TrustBadge icon={Users} stat="500+" label="Happy Families" />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } } }}>
              <TrustBadge icon={ShieldCheck} stat="100%" label="Verified Staff" />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } } }}>
              <TrustBadge icon={Clock} stat="24h" label="Quick Replace" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
        <div className="absolute top-40 left-10 w-96 h-96 bg-brand-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-brand-royal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold drop-shadow-lg transform hover:scale-110 transition-transform duration-500">
              <path d="M2 12L12 2L22 12L12 22L2 12Z" fill="#C9A84C" fillOpacity="0.2"/>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <SectionHeader 
            title="Our Premium Services" 
            subtitle="Tailored domestic staffing solutions to meet your specific household needs." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Redesign */}
      <section className="py-16 md:py-24 bg-brand-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-navy text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Crystal Maid?
            </h2>
            <p className="text-brand-greyText text-lg max-w-2xl mx-auto">Experience unparalleled peace of mind with Bengaluru's most trusted premium domestic staffing agency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Background Verified", desc: "Rigorous police and extensive background checks for every single staff member before deployment." },
              { icon: Sparkles, title: "Trained Professionals", desc: "Intensive proprietary training programs ensuring top-tier service quality, hygiene, and etiquette." },
              { icon: Clock, title: "Quick Replacements", desc: "Guaranteed seamless staff replacement within 24-48 hours if you're ever unsatisfied." },
              { icon: Users, title: "Dedicated Support", desc: "Priority 24/7 customer support manager assigned exclusively to assist your household." },
              { icon: Star, title: "Highest Ratings", desc: "Consistently rated 5 stars by over 500 extremely satisfied and happy families across Bengaluru." },
              { icon: HeartPulse, title: "Compassionate Care", desc: "Highly empathetic and loving caregivers who are trained to treat your family just like their own." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group bg-brand-offwhite rounded-2xl p-6 md:p-8 border border-brand-grey hover:border-brand-gold/50 hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Subtle Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-brand-white shadow-sm flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500 relative z-10 border border-brand-grey/50">
                  <item.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3 relative z-10">{item.title}</h3>
                <p className="text-brand-greyText leading-relaxed text-sm md:text-base relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#ebedee] to-[#fdfbfb]">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-royal/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-brand-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear from the families who trust us." 
          />
          <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
            <Marquee speed="slow" className="py-4">
              {testimonials.map((test, index) => (
                <div key={index} className="w-[350px] md:w-[450px]">
                  <TestimonialCard 
                    name={test.name}
                    location={test.location}
                    quote={test.quote}
                    rating={test.rating}
                  />
                </div>
              ))}
              {/* Duplicate array for smoother short-array marquee loop visually if needed, though Marquee handles it */}
              {testimonials.map((test, index) => (
                <div key={`dup-${index}`} className="w-[350px] md:w-[450px]">
                  <TestimonialCard 
                    name={test.name}
                    location={test.location}
                    quote={test.quote}
                    rating={test.rating}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-white border-t border-brand-grey relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-1/3 h-full bg-brand-gold/5 transform -skew-x-12 origin-top"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6 text-3xl md:text-5xl text-brand-navy"
          >
            Ready to simplify your life?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-greyText mb-8 md:mb-12"
          >
            Get a free consultation today and find the perfect match for your household needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact"
              className="inline-block bg-brand-gold text-brand-navy px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-brand-navy hover:text-brand-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

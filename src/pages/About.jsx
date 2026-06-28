import { Helmet } from 'react-helmet-async';
import { Target, Heart, Award, Shield, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-brand-white">
      <Helmet>
        <title>About Us | Crystal House Maid Service</title>
        <meta name="description" content="Learn about our story, vision, and core values. We are Bengaluru's premier domestic staffing service." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-brand-navy pt-32 pb-24 md:pt-40 md:pb-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display text-brand-white mb-6">
            Building Trust. Delivering Excellence.
          </h1>
          <p className="text-xl text-brand-offwhite/90 leading-relaxed font-light max-w-2xl mx-auto">
            Since 2022, we have been Bengaluru’s premier partner in curating exceptional, reliable, and highly trained household staff for discerning families.
          </p>
        </div>
      </section>

      {/* Storytelling Section 1: Our Origins */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] bg-brand-offwhite">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional cleaning and home management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-brand-royal uppercase tracking-widest text-sm font-semibold mb-3">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-display text-brand-navy mb-6">
                Born from a Need for Absolute Reliability
              </h2>
              <div className="text-brand-greyText space-y-4 font-light text-lg leading-relaxed">
                <p>
                  Crystal House Maid Service was established with a singular focus: to bridge the gap between families needing trustworthy help and dedicated professionals seeking respectful employment.
                </p>
                <p>
                  We recognized that inviting someone into your home requires an immense amount of trust. Our rigorous vetting processes, comprehensive training, and continuous support systems were built to ensure that this trust is never compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section 2: Mission & Vision */}
      <section className="py-20 md:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display text-brand-navy mb-10">
                Our Mission & Vision
              </h2>
              
              <div className="mb-10 flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-brand-white border border-brand-grey flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-brand-royal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-brand-navy mb-3">The Vision</h3>
                  <p className="text-brand-greyText font-light text-lg leading-relaxed">
                    To be the most trusted and preferred domestic staffing partner for families in Bengaluru, recognized for our absolute commitment to quality, reliability, and compassion.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-brand-white border border-brand-grey flex items-center justify-center shadow-sm">
                    <Heart className="w-6 h-6 text-brand-royal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-brand-navy mb-3">The Mission</h3>
                  <p className="text-brand-greyText font-light text-lg leading-relaxed">
                    To simplify the lives of our clients by providing meticulously screened, highly trained, and dedicated domestic staff, while creating respectful and empowering employment opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] bg-brand-grey">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Beautifully maintained family home" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Core Values */}
      <section className="py-20 md:py-28 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-brand-navy mb-6">Our Core Principles</h2>
            <p className="text-brand-greyText text-lg font-light">
              We hold ourselves to the highest corporate standards, ensuring every placement is built on a foundation of mutual respect and uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency and honesty in all our dealings.' },
              { icon: Award, title: 'Excellence', desc: 'We continuously strive to exceed expectations and deliver premium service.' },
              { icon: Users, title: 'Empathy', desc: 'We treat our clients and our staff with the utmost respect and understanding.' },
              { icon: CheckCircle2, title: 'Verification', desc: 'Extensive background checks and vetting for your absolute peace of mind.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-brand-white p-8 rounded-lg border border-brand-grey shadow-sm hover:shadow-md transition-shadow">
                <value.icon className="w-8 h-8 text-brand-gold mb-6" />
                <h4 className="text-xl font-display mb-3 text-brand-navy">{value.title}</h4>
                <p className="text-brand-greyText font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-20 bg-brand-navy text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display text-brand-white mb-6">
            Ready to Experience True Reliability?
          </h2>
          <p className="text-lg text-brand-offwhite/80 mb-10 font-light">
            Contact us today to discuss your domestic staffing needs with our professional consultants.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-gold text-brand-navy px-8 py-4 rounded font-semibold hover:bg-brand-goldLight transition-colors duration-300">
            Speak with a Consultant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

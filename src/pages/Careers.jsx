import { Helmet } from 'react-helmet-async';
import CareerForm from '../components/forms/CareerForm';
import heroMaidImage from '../assets/hero_maid.png';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Crystal House Maid Service</title>
        <meta name="description" content="Join our team of professional domestic staff in Bengaluru. We offer respectful employment, fair pay, and training." />
      </Helmet>

      <section className="bg-brand-navy py-16 text-center text-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-4 text-brand-white">Join Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto text-brand-offwhite">Build a rewarding career with Bengaluru's top domestic staffing agency.</p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display text-brand-navy mb-6">Why work with us?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-brand-royal text-brand-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-1">Fair & On-Time Salary</h4>
                    <p className="text-brand-greyText">We ensure highly competitive market rates and guarantee timely payments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-royal text-brand-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-1">Respectful Environment</h4>
                    <p className="text-brand-greyText">We partner with families who value and respect domestic professionals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-royal text-brand-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-1">Training & Support</h4>
                    <p className="text-brand-greyText">Continuous skill development and dedicated support from our agency team.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10 rounded-2xl overflow-hidden shadow-xl h-64 border-4 border-white">
                <img src={heroMaidImage} alt="Professional Domestic Staff" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

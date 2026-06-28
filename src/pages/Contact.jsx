import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import heroMaidImage from '../assets/hero_maid.png';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Crystal House Maid Service</title>
        <meta name="description" content="Get in touch with us for the best domestic staff in Bengaluru. Request a free consultation." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Crystal House Maid Service",
              "image": "",
              "@id": "",
              "url": "https://www.crystalmaid.com",
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123, Service Road, HSR Layout",
                "addressLocality": "Bengaluru",
                "postalCode": "560102",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>

      <section className="relative py-24 text-center text-brand-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroMaidImage} alt="Contact Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl mb-4 text-brand-white font-display">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-brand-offwhite/90">We're here to answer all your questions and find the perfect staff for your home.</p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display text-brand-navy mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-brand-white p-3 rounded-full text-brand-royal shadow-sm mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-navy">Office Address</h4>
                    <p className="text-brand-greyText mt-1">123, Service Road, HSR Layout,<br/>Bengaluru, Karnataka 560102</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-white p-3 rounded-full text-brand-royal shadow-sm mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-navy">Phone Number</h4>
                    <a href="tel:+919876543210" className="text-brand-greyText mt-1 block hover:text-brand-royal">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-white p-3 rounded-full text-brand-royal shadow-sm mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-navy">Email Address</h4>
                    <a href="mailto:info@crystalmaid.com" className="text-brand-greyText mt-1 block hover:text-brand-royal">info@crystalmaid.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-white p-3 rounded-full text-brand-royal shadow-sm mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-brand-navy">Working Hours</h4>
                    <p className="text-brand-greyText mt-1">Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-64 bg-brand-grey rounded-2xl overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.242550137358!2d77.6256885!3d12.912666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148d49487c81%3A0xb304b72ef3d94132!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display text-brand-navy mb-8">Send a Message</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section (Included in Contact page for simplicity) */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-center text-brand-navy mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How long does the background verification take?", a: "Our rigorous 4-step background verification process typically takes 3-5 business days." },
              { q: "What is your replacement policy?", a: "We offer up to 3 replacements within the first 6 months of the contract if you are unsatisfied with the staff's performance." },
              { q: "Do the maids speak English?", a: "Many of our staff are bilingual and speak basic English. If this is a strict requirement, please specify during your consultation." },
              { q: "Are there any hidden charges?", a: "No, our pricing is completely transparent. You pay a one-time agency fee and the monthly salary directly to the staff." }
            ].map((faq, i) => (
              <div key={i} className="border border-brand-grey rounded-xl p-6 bg-brand-offwhite">
                <h4 className="font-semibold text-lg text-brand-navy mb-2">{faq.q}</h4>
                <p className="text-brand-greyText">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

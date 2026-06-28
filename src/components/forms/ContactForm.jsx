import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const message = `Contact Form Inquiry\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputClass = "w-full text-base px-4 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal transition-all shadow-inner text-brand-navy placeholder-brand-navy/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/50 relative">
      
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Name</label>
        <input {...register('name', { required: true })} className={inputClass} placeholder="Your Name" />
        {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Phone</label>
        <input type="tel" {...register('phone', { required: true })} className={inputClass} placeholder="Your Phone Number" />
        {errors.phone && <span className="text-red-500 text-xs mt-1 block">Phone is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Email</label>
        <input type="email" {...register('email', { required: true })} className={inputClass} placeholder="your@email.com" />
        {errors.email && <span className="text-red-500 text-xs mt-1 block">Email is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Message</label>
        <textarea {...register('message', { required: true })} rows="4" className={inputClass} placeholder="How can we help you?"></textarea>
        {errors.message && <span className="text-red-500 text-xs mt-1 block">Message is required</span>}
      </div>

      <button type="submit" className="w-full bg-brand-navy/90 backdrop-blur-md text-brand-white py-4 rounded-xl font-bold text-lg hover:bg-brand-royal transition-colors duration-300 shadow-[0_4px_15px_rgba(10,31,68,0.3)] hover:shadow-[0_6px_20px_rgba(10,31,68,0.4)] mt-4">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

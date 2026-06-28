import { useForm } from 'react-hook-form';

const EnquiryForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const message = `Hi, I'm interested in the ${data.serviceType} service.\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputClass = "w-full text-base px-4 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal transition-all shadow-inner text-brand-navy placeholder-brand-navy/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-royal to-brand-gold"></div>
      <h3 className="text-2xl font-display text-brand-navy mb-6 font-bold">Request a Callback</h3>
      
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
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Service Type</label>
        <select {...register('serviceType', { required: true })} className={inputClass}>
          <option value="">Select a Service</option>
          <option value="House Maid">House Maid</option>
          <option value="Cook">Cook</option>
          <option value="Baby Care">Baby Care</option>
          <option value="Japa Maid">Japa Maid</option>
          <option value="Patient Care">Patient Care</option>
          <option value="Driver">Driver</option>
        </select>
        {errors.serviceType && <span className="text-red-500 text-xs mt-1 block">Service type is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Message (Optional)</label>
        <textarea {...register('message')} rows="3" className={inputClass} placeholder="Any specific requirements?"></textarea>
      </div>

      <button type="submit" className="w-full bg-brand-royal/90 backdrop-blur-md text-brand-white py-4 rounded-xl font-bold text-lg hover:bg-brand-navy transition-colors duration-300 shadow-[0_4px_15px_rgba(26,77,176,0.3)] hover:shadow-[0_6px_20px_rgba(26,77,176,0.4)] mt-4">
        Get Free Consultation
      </button>
    </form>
  );
};

export default EnquiryForm;

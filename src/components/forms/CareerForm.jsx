import { useForm } from 'react-hook-form';

const CareerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handling file upload via WhatsApp is tricky, so we'll just send text
    const message = `Job Application\nName: ${data.name}\nPhone: ${data.phone}\nRole: ${data.role}\nExperience: ${data.experience} years\nMessage: ${data.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputClass = "w-full text-base px-4 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal transition-all shadow-inner text-brand-navy placeholder-brand-navy/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-royal to-brand-gold"></div>
      <h3 className="text-2xl font-display text-brand-navy mb-6 font-bold">Apply Now</h3>
      
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Name</label>
        <input {...register('name', { required: true })} className={inputClass} placeholder="Full Name" />
        {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Phone</label>
        <input type="tel" {...register('phone', { required: true })} className={inputClass} placeholder="Phone Number" />
        {errors.phone && <span className="text-red-500 text-xs mt-1 block">Phone is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Applying For</label>
        <select {...register('role', { required: true })} className={inputClass}>
          <option value="">Select a Role</option>
          <option value="House Maid">House Maid</option>
          <option value="Cook">Cook</option>
          <option value="Baby Care">Baby Care</option>
          <option value="Japa Maid">Japa Maid</option>
          <option value="Patient Care">Patient Care</option>
        </select>
        {errors.role && <span className="text-red-500 text-xs mt-1 block">Role is required</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Years of Experience</label>
        <input type="number" {...register('experience', { required: true })} className={inputClass} placeholder="e.g., 3" />
        {errors.experience && <span className="text-red-500 text-xs mt-1 block">Experience is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-navy mb-1.5">Upload Resume (Optional)</label>
        <input type="file" {...register('resume')} className="w-full text-base px-4 py-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-royal transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-royal file:text-white hover:file:bg-brand-navy shadow-inner" />
      </div>

      <button type="submit" className="w-full bg-brand-navy/90 backdrop-blur-md text-brand-white py-4 rounded-xl font-bold text-lg hover:bg-brand-royal transition-colors duration-300 shadow-[0_4px_15px_rgba(10,31,68,0.3)] hover:shadow-[0_6px_20px_rgba(10,31,68,0.4)] mt-4">
        Apply for Job
      </button>
    </form>
  );
};

export default CareerForm;

const CallButton = ({ phoneNumber = "+919876543210" }) => {
  return (
    <a 
      href={`tel:${phoneNumber}`}
      className="fixed bottom-24 right-6 md:bottom-[7.5rem] md:right-10 z-[60] bg-brand-royal text-white p-3 md:p-4 rounded-full shadow-[0_8px_30px_rgba(26,77,176,0.4)] hover:shadow-[0_8px_30px_rgba(26,77,176,0.6)] transition-all duration-300 flex items-center justify-center group border border-brand-royal/80 hover:-translate-y-1"
      aria-label="Call Us Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="24" height="24" className="relative z-10 transform group-hover:scale-110 transition-transform">
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-white/90 backdrop-blur-sm text-brand-navy font-bold px-5 py-3 rounded-2xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-4 group-hover:translate-x-0 border border-white/50">Call Us Now</span>
    </a>
  );
};

export default CallButton;

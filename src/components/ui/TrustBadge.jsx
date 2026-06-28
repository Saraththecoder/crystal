const TrustBadge = ({ icon: Icon, stat, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 group">
      <div className="mb-4 text-brand-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <div className="font-display font-bold text-4xl sm:text-5xl text-brand-white mb-2 group-hover:text-brand-goldLight transition-colors duration-300">{stat}</div>
      <div className="text-sm sm:text-base text-brand-offwhite/70 uppercase tracking-widest font-semibold">{label}</div>
    </div>
  );
};

export default TrustBadge;

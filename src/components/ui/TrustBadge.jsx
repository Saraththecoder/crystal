const TrustBadge = ({ icon: Icon, stat, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-brand-white rounded-2xl shadow-sm border border-brand-grey hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-brand-offwhite p-4 rounded-full mb-4 text-brand-royal">
        <Icon size={32} />
      </div>
      <div className="font-bold text-2xl text-brand-navy mb-1">{stat}</div>
      <div className="text-sm text-brand-greyText text-center font-medium">{label}</div>
    </div>
  );
};

export default TrustBadge;

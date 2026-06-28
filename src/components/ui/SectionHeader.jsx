const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <h2 className="text-brand-navy mb-4 relative inline-block">
        {title}
        <span className={`absolute -bottom-2 ${centered ? 'left-1/4 w-1/2' : 'left-0 w-1/3'} h-1 bg-brand-gold rounded-full`}></span>
      </h2>
      {subtitle && <p className="text-brand-greyText text-lg mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;

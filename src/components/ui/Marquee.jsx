import { useRef, useEffect, useState } from 'react';

const Marquee = ({ children, direction = 'left', speed = 'normal', className = '' }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  // Use tailwind utility classes for speed based on mapping
  const speedClass = {
    slow: 'duration-[40s]',
    normal: 'duration-[25s]',
    fast: 'duration-[15s]',
  }[speed];

  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
      <div 
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 py-4 ${animationClass} ${speedClass}`}
      >
        <div ref={contentRef} className="flex gap-8 items-center justify-around shrink-0 min-w-full">
          {children}
        </div>
      </div>
      <div 
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 py-4 ${animationClass} ${speedClass}`}
        aria-hidden="true"
      >
        <div className="flex gap-8 items-center justify-around shrink-0 min-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

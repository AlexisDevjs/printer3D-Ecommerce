import { useEffect, useRef, useState } from "react";


interface Props {
  children: React.ReactNode
  fadeTo: 'right' | 'left' | 'up' | 'down'
}

const FadeInSection: React.FC<Props> = ({
  children,
  fadeTo
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const fadeType = `fade-${fadeTo}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? `animate-${fadeType}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection

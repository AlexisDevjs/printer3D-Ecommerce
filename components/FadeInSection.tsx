import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade";
  delayBase?: number;
}

const FadeInCascade: React.FC<Props> = ({
  children,
  animation,
  delayBase = 100,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          childrenArray.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, index]);
            }, index * delayBase);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delayBase, childrenArray]);

  return (
    <div ref={ref}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={`transition-opacity animate-duration-700 ${
            visibleIndexes.includes(index)
              ? `animate-${animation}`
              : "opacity-0"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FadeInCascade;

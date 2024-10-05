import { useRef, useEffect } from "react";
import gasp from "gsap";

const HeroContent = () => {
  const content = useRef(null);

  useEffect(() => {
    const el = content.current;
    gasp.fromTo(
      el,
      { opacity: 0, y: 100 },
      { opacity: 0.7, y: 0, duration: 2 }
    );
  }, []);

  return (
    <div
      ref={content}
      className="absolute z-50 text-white top-1/2 left-1/3 flex flex-col gap-7"
    >
      <span className="text-xl lg:text-9xl mx-auto ">MASSAGE</span>
      <span className="text-xl lg:text-9xl mx-auto ">WHEN YOUR BRAIN</span>
      <span className="text-xl lg:text-9xl mx-auto ">NEEDS A HUG</span>
    </div>
  );
};

export default HeroContent;

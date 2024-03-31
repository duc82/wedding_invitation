import { Carousel, OptionsType } from "@fancyapps/ui";
import { useEffect, useRef } from "react";

interface CarouselProviderProps {
  children: React.ReactNode;
  options?: OptionsType;
  className?: string;
}

const CarouselProvider = (props: CarouselProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const options = props.options || {};

    const carousel = new Carousel(container, options);

    return () => {
      carousel.destroy();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
};

export default CarouselProvider;

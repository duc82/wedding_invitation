import { useRef, useEffect } from "react";

import { Fancybox, OptionsType } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProviderProps {
  children: React.ReactNode;
  delegate?: string;
  options?: OptionsType;
  className?: string;
}

const FancyboxProvider = (props: FancyboxProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    Fancybox.bind(container, delegate, options);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
};

export default FancyboxProvider;

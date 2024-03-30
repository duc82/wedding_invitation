import { useEffect } from "react";
import AOS from "aos";

const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return children;
};

export default AosProvider;

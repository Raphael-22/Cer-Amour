import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useReveal(threshold = 0.15): [MutableRefObject<any>, boolean] {
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, visible];
}

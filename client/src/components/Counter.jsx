import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 1.5, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const end = parseInt(to, 10);
    if (isNaN(end)) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out quad formula
      const easeOut = progress * (2 - progress);
      const current = Math.floor(easeOut * (end - from) + from);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default Counter;

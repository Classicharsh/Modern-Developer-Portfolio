import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scrollTo', toggleVisibility);
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scrollTo', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-primary text-black shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

import React, { useState, useEffect, useRef } from 'react';
import './TestPage.css';

const TestPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aufPhraseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (aufPhraseRef.current) {
      observer.observe(aufPhraseRef.current);
    }

    return () => {
      if (aufPhraseRef.current) {
        observer.unobserve(aufPhraseRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className='BigBody'></div>
    <div className={isVisible ? 'scroll2' : 'noScroll2'} ref={aufPhraseRef}>
      fdsfdsfdsfsdfdsfdsfdsfdsfdsfdsfdsf
    </div>
    </div>
  );
}

export default TestPage;


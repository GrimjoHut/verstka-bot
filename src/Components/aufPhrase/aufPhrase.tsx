import React, { useState, useEffect, useRef } from "react";
import "./aufPhrase.css";

interface AufProps {
  AufText: string | undefined;
  Direction: string;
}

const AufPhrase: React.FC<AufProps> = ({ AufText, Direction }) => {
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
    <div className="aufContainer" ref={aufPhraseRef}>
     <div className={`${Direction} ${isVisible ? " scroll" : " noScroll"}`}>
      {AufText}
      </div>
    </div>
  );
};

export default AufPhrase;

//вверх, слева, вправо, opacity, вниз

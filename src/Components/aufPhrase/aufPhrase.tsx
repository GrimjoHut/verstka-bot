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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (aufPhraseRef.current) {
      observer.observe(aufPhraseRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${Direction} ${isVisible ? " scroll" : " noScroll"}`}
      ref={aufPhraseRef}>
      {AufText}
    </div>
  );
};

export default AufPhrase;

//вверх, слева, вправо, opacity, вниз

import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const words = [
    'Web Development',
    'C Programming',
    'Python',
    'C++',
    'Java',
    'DSA',
    'Machine Learning',
    'Data Science',
  ];
  const typingDelay = 100;
  const erasingDelay = 100;
  const newLetterDelay = 500;
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < words[wordIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + words[wordIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingDelay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), newLetterDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingDelay);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }, newLetterDelay);
        return () => clearTimeout(timeout);
      }
    }
  }, [isTyping, charIndex, wordIndex, words]);

  return (
    <h2 className='text-2xl mt-2 '>
      Learn  <span id="word"className='text-[#99ff00]'>{text}</span>
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;

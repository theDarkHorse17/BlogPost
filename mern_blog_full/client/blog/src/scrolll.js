// components/ScrollEffects.js
import React, { useEffect } from 'react';

const ScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      const star = document.getElementById('star');
      const moon = document.getElementById('moon');
      const mbehind = document.getElementById('mbehind');
      const btn = document.getElementById('btn');
      const text = document.getElementById('text');
      const header = document.querySelector('header');
      // const about = document.getElementById('about'); // Uncomment if needed

      star.style.left = value * 0.25 + 'px';
      moon.style.top = value * 1.05 + 'px';
      mbehind.style.top = value * 0.5 + 'px';
      btn.style.marginTop = value * 1.5 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1.5 + 'px';
      header.style.top = value * 0.5 + 'px';
      // about.style.right = value * 0.08 + 'px'; // Uncomment if needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <></>; // This component doesn't render any visible content
};

export default ScrollEffects;

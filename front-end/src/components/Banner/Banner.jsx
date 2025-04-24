import React, { useState, useEffect } from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import './Banner.css';

const Banner = () => {
  // Array of objects, each containing image and content information
  const slides = [
    { img: img1, title: "More than 40 years of Experience", buttonText: "Take a look" },
    { img: img2, title: "Friendly Staff", buttonText: "Our Staff" },
    { img: img3, title: "Great Enironment", buttonText: "See pictures" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 6000ms
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='banner-container' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${slides[currentIndex].img})`
    }}>
      <div className='banner-content'>
        <h1>{slides[currentIndex].title}</h1>
        <button>{slides[currentIndex].buttonText}</button>
      </div>
      <h1>Over 40 Years of Experience</h1>
    </div>
  );
}

export default Banner;

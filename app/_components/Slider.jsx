"use client";

import React, { useRef } from "react";
import { useState, useEffect } from "react";

const Slider = ({ children }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - slidesToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + slidesToShow, children.length - slidesToShow)
    );
  };

  const handleMouseDown = (e) => {
    sliderRef.current.isDown = true;
    sliderRef.current.startX = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    sliderRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!sliderRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - sliderRef.current.startX) * 3; // Scroll-fast
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - walk;
  };

  return (
    <div className="relative mb-20">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
      >
        {"<"}
      </button>
      <div
        className="overflow-hidden"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            width: `${children.length * (100 / slidesToShow)}%`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="flex-shrink-0"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;

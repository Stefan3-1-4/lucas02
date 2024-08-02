"use client";

import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const KeenSliderComponent = () => {
  const sliderRef = useRef(null);
  let sliderInstance = null;

  useEffect(() => {
    sliderInstance = new KeenSlider(sliderRef.current, {
      loop: true,
      mode: 'free',
      slides: {
        perView: 3,
        spacing: 15,
      },
    });

    return () => {
      if (sliderInstance) sliderInstance.destroy();
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider max-w-fit overflow-hidden">
      <div className="keen-slider__slide flex flex-col border-2 border-gray-800 rounded-lg p-6 space-y-3">
        <h3 className="text-xl font-bold mb-4">Front-end Engineering Design</h3>
        {['React JS', 'React Native', 'Next JS', 'Vite', 'Figma', 'Jest', 'React Testing Library'].map((tech, index) => (
          <span key={index} className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span>{tech}</span>
          </span>
        ))}
      </div>

      <div className="keen-slider__slide flex flex-col border-2 border-gray-800 rounded-lg p-6 space-y-3">
        <h3 className="text-xl font-bold mb-4">Publications in both stores</h3>
        {['Appstore', 'Google Play store'].map((store, index) => (
          <span key={index} className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span>{store}</span>
          </span>
        ))}
      </div>

      {/* Add similar structures for Back-End and Languages slides */}
    </div>
  );
};

export default KeenSliderComponent;
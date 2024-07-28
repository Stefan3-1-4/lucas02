"use client";

import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const KeenSliderComponent = () => {
  const sliderRef = useRef(null);
  let sliderInstance = null;

  useEffect(() => {
    sliderInstance = new KeenSlider(sliderRef.current, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 3,
      },
    });

    return () => {
      if (sliderInstance) sliderInstance.destroy();
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide mx-7 bg-amber-200 text-black p-10 rounded-3xl">Javascript</div>
      <div className="keen-slider__slide mx-7 bg-emerald-200 text-black p-10 rounded-3xl">React</div>
      <div className="keen-slider__slide mx-7 bg-slate-100 text-black p-10 rounded-3xl">Next.js</div>
      <div className='keen-slider__slide mx-7 bg-lime-200 text-black p-10 rounded-3xl'>Figma</div>
    </div>
  );
};

export default KeenSliderComponent;

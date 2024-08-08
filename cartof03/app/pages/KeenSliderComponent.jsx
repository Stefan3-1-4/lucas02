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
        perView: 2,
      },
    });

    return () => {
      if (sliderInstance) sliderInstance.destroy();
    };
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
      <div className="keen-slider__slide mx-7 bg-amber-200 text-black p-10 rounded-3xl"><span className='font-bold text-xl'>Javascript</span> <img src="/images/jsIcon.jpg" className='rounded-3xl'/></div>
      <div className="keen-slider__slide mx-7 bg-blue-400 text-black p-10 rounded-3xl"><span className='font-bold text-xl'>React</span> <img src="/images/react.jpg" className='rounded-full w-56 h-56'/></div>
      <div className="keen-slider__slide mx-7 bg-slate-100 text-black p-10 rounded-3xl"><span className='font-bold text-xl'>Next.js</span> <img src="/images/next.jpg" className='rounded-full'/></div>
      <div className='keen-slider__slide mx-7 bg-lime-200 text-black p-10 rounded-3xl'><span className='font-bold text-xl'>Figma</span> <img src="/images/figma-removebg.png.png" className='rounded-3xl'/></div>
      <div className='keen-slider__slide mx-7 bg-black text-black p-10 rounded-3xl'>test</div>
    </div>
  );
};

export default KeenSliderComponent;

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
    <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
      <div className="keen-slider__slide mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800">Front engineering design
        <ul>
          <li>React Js</li>
          <li>Reac Native</li>
          <li>Next Js</li>
          <li>Vite</li>
          <li>Figma</li>
          <li>Jest</li>
          <li>React Testing Libray</li>
        </ul>
      </div>
      <div className="keen-slider__slide min-h-fit max-h-44 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800">Devops
        <ul>
          <li>Github Actions</li>
          <li>Ngnx</li>
          <li>Docker</li>
        </ul>
      </div>
      <div className="keen-slider__slide max-h-36 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800">Publications in both Stores
        <ul>
          <li>App Store</li>
          <li>Google Play Store</li>
        </ul>
      </div>
      <div className='keen-slider__slide max-h-36 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800'>Backend
        <ul>
          <li>Node</li>
          <li>Prisma</li>
        </ul>
      </div>
      <div className='keen-slider__slide max-h-36 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800'>Languages
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
        </ul>
      </div>
      <div className='keen-slider__slide mx-7 bg-black text-black p-10 rounded-3xl'></div>
      <div className='keen-slider__slide mx-7 bg-black text-black p-10 rounded-3xl'></div>
    </div>
  );
};

export default KeenSliderComponent;
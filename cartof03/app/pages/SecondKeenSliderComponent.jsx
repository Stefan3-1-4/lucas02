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
        <ul className='leading-10 text-xl'>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/react-removebg-preview.png"/></div> <span>React Js</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/reactNtv.png"/></div> <span>React Native</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/next.jpg" className='rounded-full'/></div> <span>Next Js</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/vite.png"/></div> <span>Vite</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/figma-removebg.png.png"/></div> <span>Figma</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/jest.png"/></div> <span>Jest</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/carcalac.png"/></div> <span>React Testing Library</span></li>
        </ul>
      </div>
      <div className="keen-slider__slide min-h-fit max-h-52 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800">Devops
        <ul className='leading-10 text-xl'>
        <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/gtAction.png"/></div> <span>Github Actions</span></li>
        <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/nginx.png"/></div> <span>Njix</span></li>
        <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/doker.png"/></div> <span>Doker</span></li>
        </ul>
      </div>
      <div className="keen-slider__slide max-h-40 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800">Publications in both Stores
        <ul className='leading-10 text-xl'>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/appStr.png"/></div> <span>App Store</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/gglPlay.png"/></div> <span>Google Play Store</span></li>
        </ul>
      </div>
      <div className='keen-slider__slide max-h-40 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800'>Backend
        <ul className='leading-10 text-xl'>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/nodeIcon.png"/></div> <span>Node</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/prisma.png"/></div> <span>Prisma</span></li>
        </ul>
      </div>
      <div className='keen-slider__slide max-h-40 mx-7 bg-black text-white p-10 rounded-3xl border-2 border-stone-800'>Languages
        <ul className='leading-10 text-xl'>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/jsIcon.jpg" className='rounded-lg'/></div> <span>Javascript</span></li>
          <li className='flex space-x-7'> <div className='max-w-7 max-h-7'><img src="/images/typescriptIcon.png" className='rounded-lg'/></div> <span>Typescript</span></li>
        </ul>
      </div>
      <div className='keen-slider__slide mx-7 bg-black text-black p-10 rounded-3xl'></div>
      <div className='keen-slider__slide mx-7 bg-black text-black p-10 rounded-3xl'></div>
    </div>
  );
};

export default KeenSliderComponent;
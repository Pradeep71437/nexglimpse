// import { Carousel } from '@material-tailwind/react';
import React from 'react';
// import { CarouselDefault } from './CarouselDefault';
import {ArrowRight} from 'lucide-react'
import Banner from './../assets/banner.png'

const HeroSection = () => {
  const glowStyle = `
    .glow {
      margin-top:20px;
      color: #fff;
      text-align: center;
      animation: glow 2s ease-in-out infinite alternate;
    }

    @-webkit-keyframes glow {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ffa600, 0 0 40px #ffa600, 0 0 50px #ffa600, 0 0 60px #ffa600, 0 0 70px #ffa600;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ffc267, 0 0 40px #ffc267, 0 0 50px #ffc267, 0 0 60px #ffc267, 0 0 70px #ffc267, 0 0 80px #ffc267;
      }
    }
  `;

  return (
    <div className='lg:flex'>
    <div className="flex flex-col items-center lg:items-start mt-6 w-full  lg:mt-16 lg:mx-6">
      <style>{glowStyle}</style>
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center lg:text-start tracking-wide">
        Elevate Your Online Prescence With<br></br>
        <span className="glow my-3">Nexglimpse</span>
      </h1>
      <p className="mt-8 text-lg text-center lg:text-start text-neutral-500 max-w-4xl">
        Transform your digital presence with our expert web development services.
      </p>
      <div className="flex justify-center my-10">
      <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-400 py-4 px-5 mx-3 rounded-2xl lg:text-lg flex items-center space-x-2">
        <span>Get Started</span>
        <ArrowRight size={24} />
      </a>
    </div>
    </div>
    <div className='w-full mt-4' >
      <img src={Banner} alt="" className='w-full mt-10' />
      {/* <CarouselDefault/> */}
    </div>
    </div>
  );
};

export default HeroSection;

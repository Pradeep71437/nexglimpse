import React from 'react';
import Reactjs from "./../assets/React.png";
import Nodejs from "./../assets/Node.png";
import Mongo from "./../assets/Mongo.png";
import Mysql from "./../assets/Mysql.png";
import Php from "./../assets/Php.png";
import Bootstrap from "./../assets/Bootstrap.png";
import Tailwind from "./../assets/Tailwind.png";
import Laravel from "./../assets/Laravel.png";

const TechStack = () => {
  return (
    <div>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
      <div className="relative flex overflow-x-hidden">
        <div className="flex py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-6"><img src={Reactjs} alt="React" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Nodejs} alt="Node.js" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Mongo} alt="MongoDB" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Mysql} alt="MySQL" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Php} alt="PHP" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>

        </div>

        <div className="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-6"><img src={Bootstrap} alt="Bootstrap" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Tailwind} alt="Tailwind" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Laravel} alt="Tailwind" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Tailwind} alt="Tailwind" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>
          <span className="text-4xl mx-6"><img src={Tailwind} alt="Tailwind" className='sm:w-100 lg:w-40 inline-block align-middle' /></span>

        </div>
      </div>
    </div>
  );
};

export default TechStack;

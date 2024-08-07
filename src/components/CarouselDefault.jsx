import { Carousel } from "@material-tailwind/react";

import Banner from './../assets/banner.png'

export function CarouselDefault() {
  return (
    <div className="relative">
      <Carousel className="rounded-xl " >
        <img
          src={Banner}
          alt="image 1"
          className="h-full w-full m-2 object-cover"
        />
        <img
          src={Banner}
          alt="image 2"
          className="h-full w-full m-2 object-cover"
        />
        <img
          src={Banner}
          alt="image 3"
          className="h-full w-full m-2 object-cover"
        />
      </Carousel>
      <style>{`
        button {
          display: none !important;
        }
      
      `}</style>
    </div>
  );
}

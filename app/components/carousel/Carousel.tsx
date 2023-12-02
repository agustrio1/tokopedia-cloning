"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent: React.FC = () => {
  return (
    <div className="max-w-[400px] h-20">
      <Carousel 
      autoPlay 
      infiniteLoop 
      showArrows={false} 
      showThumbs={false}
      showStatus={false}
      interval={3000}
      >
        <div>
          <img src="/carousel/tokped1.jpg" alt="image1" />
        </div>
        <div>
          <img src="/carousel/tokped2.jpg" alt="image2" />
        </div>
        <div>
          <img src="/carousel/tokped3.jpg" alt="image3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

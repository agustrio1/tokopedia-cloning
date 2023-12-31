"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent: React.FC = () => {
  const images = [
    "/carousel/tokped1.jpg",
    "/carousel/tokped2.jpg",
    "/carousel/tokped3.jpg",
  ];

  return (
    <div className="max-w-screen-md mx-auto">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showArrows={false} 
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`image${index + 1}`}  className="w-full rounded-lg"/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

import React from "react";
import CarouselComponent from "../components/carousel/Carousel";
import CategoryMenu from "../components/category/CategoryMenu";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="mt-2">
      <div className="max-w-[300px] sm:max-w[350px] md:max-w-[400px] mx-auto mb-8"> 
        <CarouselComponent />
      </div>
      <div className="mx-auto">
        <CategoryMenu />
      </div>
    </div>
  );
};

export default Homepage;

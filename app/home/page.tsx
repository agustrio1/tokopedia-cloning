import React from "react";
import CarouselComponent from "../components/carousel/Carousel";
import CategoryMenu from "../components/category/CategoryMenu";
import Card from "../components/data/Card";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="max-w-screen-md mt-2 mx-auto">
      <div className="max-w-[300px] sm:max-w[350px] md:max-w-[400px] mx-auto mb-8"> 
        <CarouselComponent />
      </div>
      <div className="md:ml-40">
      <CategoryMenu />
      <Card />
      </div>
    </div>
  );
};

export default Homepage;

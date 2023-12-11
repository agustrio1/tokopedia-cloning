import React from "react";
import Homepage from "./home/page";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center max-w-screen-md mx-auto mt-20">
      <Homepage />
    </div>
  );
};

export default Home;

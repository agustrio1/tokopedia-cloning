import React from "react";
import Homepage from "./home/page";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-md mx-auto">
      <Homepage />
    </div>
  );
};

export default Home;

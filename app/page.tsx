import React from "react";
import Header from "./components/Header";
import Homepage from "./home/page";
import BottomBar from "./components/BottomBar";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div className="px-5 max-w-[600px] mx-auto">
      <Header />
      <Homepage/>
      <BottomBar/>
    </div>
  );
};

export default Home;

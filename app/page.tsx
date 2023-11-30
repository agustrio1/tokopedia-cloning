import React from "react";
import Header from "./components/Header";
import Homepage from "./home/page";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div className="px-5 max-w-[600px] mx-auto">
      <Header />
      <Homepage/>
    </div>
  );
};

export default Home;

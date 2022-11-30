import React from "react";
import Advertise from "../Banner/Advertise";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Banner2></Banner2>
      <Advertise></Advertise>
      <Categories></Categories>
    </div>
  );
};

export default Home;

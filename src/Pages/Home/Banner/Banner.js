import React from "react";
import img1 from "../../../assets/banner/Galaxy-Note10.jpg";
import img2 from "../../../assets/banner/galaxy_note_10_colours.jpg";
import img3 from "../../../assets/banner/iphone-12.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item relative w-full">
          <img src={img1} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-7 right-5 top-1/2">
            <h1 className="text-4xl font-bold text-white">
              Trade In <br />
              Your Old Device
            </h1>
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img src={img2} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-7 right-5 top-1/2">
            <h1 className="text-4xl font-bold text-white">
              We Offer <br />
              Best Deal
            </h1>
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img src={img3} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-7 right-5 top-1/2">
            <h1 className="text-4xl font-bold text-white">
              Trade In <br />
              Your Old Device
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;

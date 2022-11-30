import React from "react";

const Banner2 = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-sky-200  mb-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2019/04/Gazelle.jpg"
            alt=""
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Get Your Best One!</h1>
            <p className="py-6 text-xl">
              Buy a used phone is if you absolutely need a certain feature,
              design style, or brand.you can find those devices for a good price
              on Our site, which would make sense. You could even go a
              generation back to save more
            </p>
            <button className="btn btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

import React from "react";
import Buttion from "./Buttion";
import heroimage  from "../image/herophone.png"

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 w-full">
      <div className=" flex md:items-center w-full ">
        <div className=" m-5 ">
          <h1 className=" text-4xl md:text-7xl font-semibold text-black">
            Best app for your modern lifestyle
          </h1>
          <h1 className="text-gray-700 font-semibold mt-2 mb-5 text-2xl">
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </h1>
          <span className=" flex gap-20  ms-5 items-center">
            <Buttion type={'submit'} text={'Try for Free'} />
            <p className="text-blue-500">Watch demo video</p>
          </span>
        </div>
      </div>

      <div className="hidden md:block">
        <img src={heroimage} alt="homeimage " className="w-full h-full"/>
      </div>
    </div>
  );
};

export default Hero;

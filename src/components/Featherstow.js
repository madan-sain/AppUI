import React from "react";
import imgs from "../image/mobileappdevice.svg";
import { FaMedapps } from "react-icons/fa";
import { MdSupportAgent, MdOutlineCloud } from "react-icons/md";
import { SiGraphql } from "react-icons/si";
import Buttion from "./Buttion";

const Featherstow = () => {
  return (
    <div className="flex justify-center md:mt-20 mt-5 md:md-10">
      <div className="grid md:max-w-6xl  grid-cols-1 md:grid-cols-2">
        <div className="md:m-0 m-5">
          <div  className="md:w-[70%]">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start ">Ultimate features that we built</h1>
            <p className="font-semibold mt-2 mb-5  text-center md:text-start ">
              The rise of mobile devices transforms the way we consume
              information entirely.
            </p>
          </div>
{/* feachers divs  */}

<div className="grid grid-cols-1 md:grid-cols-2">

<div class="md:w-full mx-auto">
      <div class=" flex justify-center md:justify-start">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-red-300">
          {/* Replace GiPayMoney with your icon or content */}
          <FaMedapps />
        </div>
      </div>
      <div class="text-red-300 font-semibold  text-lg mt-4 text-center md:text-start">10 Times Award</div>
      <div class=" mt-2 text-center md:text-start">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>

    
<div class="md:w-full mx-auto">
      <div class=" flex justify-center md:justify-start">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-sky-300">
          {/* Replace GiPayMoney with your icon or content */}
          <SiGraphql />
        </div>
      </div>
      <div class="text-sky-300 font-semibold  text-lg mt-4 text-center md:text-start">10 Times Award</div>
      <div class=" mt-2 text-center md:text-start">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    
<div class="md:w-full mx-auto">
      <div class=" flex justify-center md:justify-start">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-yellow-300">
          {/* Replace GiPayMoney with your icon or content */}
          <MdOutlineCloud />
        </div>
      </div>
      <div class="text-yellow-300 font-semibold  text-lg mt-4 text-center md:text-start">10 Times Award</div>
      <div class=" mt-2 text-center md:text-start">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    
<div class="md:w-full mx-auto">
      <div class=" flex justify-center md:justify-start">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-pink-300">
          {/* Replace GiPayMoney with your icon or content */}
          <MdSupportAgent />
        </div>
      </div>
      <div class="text-pink-300 font-semibold  text-lg mt-4 text-center md:text-start">10 Times Award</div>
      <div class=" mt-2 text-center md:text-start">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>
<span className="mt-2 md:mt-5">
<Buttion text={'See All'} type={'submmit'}  />
</span>
    
</div>


        </div>

        <div className="flex justify-end w-full">
          <img src={imgs} alt="mobileapp" />
        </div>
      </div>
    </div>
  );
};

export default Featherstow;

import React from "react";
import { FaMedapps } from "react-icons/fa6";
import { MdOutlineCloud,MdOutlineSettingsAccessibility } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { SiGraphql } from "react-icons/si";



const Feachers = () => {
  return (
    <div className="m-5">
      <div className="flex justify-center text-center">
        <span className="w-96">
          <h1 className="font-bold text-2xl md:text-4xl mb-2">Why you should choose our app</h1>
          <p className="font-semibold">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </span>
      </div>

{/* feachers sections  */}

<div class="flex justify-center mt-5">
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-16 md:max-w-4xl md:px-4 md:w-full">
    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-red-300">
          {/* Replace GiPayMoney with your icon or content */}
          <FaMedapps />
        </div>
      </div>
      <div class="text-red-300 font-semibold text-center text-lg mt-4">App Development</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-blue-300">
          {/* Replace GiPayMoney with your icon or content */}
          <GiTrophyCup />
        </div>
      </div>
      <div class="text-blue-300 font-semibold text-center text-lg mt-4">10 Times Award</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-yellow-200">
          {/* Replace GiPayMoney with your icon or content */}
      <MdOutlineCloud />
        </div>
      </div>
      <div class="text-yellow-300 font-semibold text-center text-lg mt-4">Cloud Storage</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-green-200">
          {/* Replace GiPayMoney with your icon or content */}
      <MdOutlineSettingsAccessibility />
        </div>
      </div>
      <div class="text-green-300 font-semibold text-center text-lg mt-4">Customization</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>



    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-sky-200">
          {/* Replace GiPayMoney with your icon or content */}
      <SiGraphql />
        </div>
      </div>
      <div class="text-sky-300 font-semibold text-center text-lg mt-4">UI/UX Planing</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>


    <div class="md:w-full mx-auto">
      <div class="flex justify-center">
        <div class="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-pink-200">
          {/* Replace GiPayMoney with your icon or content */}
      <MdOutlineCloud />
        </div>
      </div>
      <div class="text-pink-300 font-semibold text-center text-lg mt-4">Customer Support</div>
      <div class="text-center mt-2">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Feachers;

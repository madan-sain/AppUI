import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { FaBattleNet, FaThumbsUp } from "react-icons/fa";

const Jackpottwo = () => {  
  return (
    <div className=" flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 md:max-w-4xl md:px-4 md:w-full">

    {/* First Section */}
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-10 text-2xl flex text-white justify-center gap-8 items-center h-10 rounded-full bg-red-400">
          {/* Replace GiPayMoney with your icon or content */}
          <GiPayMoney />
        </div>
      </div> 
      <div className="text-red-500 font-semibold text-center text-lg">Automatic Payouts</div>
      <div className="text-center">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>
  
    {/* Second Section */}
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-10 text-2xl flex text-white justify-center items-center h-10 rounded-full bg-blue-400">
          {/* Replace GiPayMoney with your icon or content */}
          <FaBattleNet />
        </div>
      </div>
      <div className="text-blue-500 font-semibold text-center text-lg">Network Effect</div>
      <div className="text-center">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>
  
    {/* Third Section */}
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-10 text-2xl flex text-white justify-center items-center h-10 rounded-full bg-green-400">
          {/* Replace GiPayMoney with your icon or content */}
          <FaThumbsUp />
        </div>
      </div>
      <div className="text-green-500 font-semibold text-center text-lg">Automatic Payouts</div>
      <div className="text-center">
        Get your blood tests delivered at home, collect a sample, and receive your test results.
      </div>
    </div>
  
  </div>
  </div>
  
  );
};

export default Jackpottwo;

import React from "react";
import { FaBars } from "react-icons/fa6";
import { NAV_LINKS } from "../constant";
import Buttion from "./Buttion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 p-3">
      <span className="text-lg font-bold"> 
       
        <span className="text-red-400">App</span>Lab
      </span>
      <span className="hidden md:flex gap-8 items-center">
        <ul className="flex gap-9">
        {NAV_LINKS.map((links)=>(
            <a href={links.href} key={links.key}>
                <label className="hover:font-bold translate-x-11 cursor-pointer">{links.label}</label>
            </a>
        ))}
        </ul>
        <Buttion type={'submit'} text={'Try for free'}  />
      </span>
      <span className="text-2xl md:hidden">
        <FaBars />
      </span>
    </nav>
  );
};

export default Navbar;

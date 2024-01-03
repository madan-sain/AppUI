import React from "react";
import appdevimg from "../image/appdev.jpg";
import Buttion from "./Buttion";

const Herotow = () => {
  return (
    <div className="">
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-5">
        <div className="w-full">
          <span>
            <img src={appdevimg} alt="appdev" />
          </span>
        </div>
        <div className="flex items-center w-96">
          <div>
            <h1 className="text-lg md:text-4xl mb-3  font-semibold">
              Designed & built by the latest code integration
            </h1>
            <p className="mb-3 text-wrap">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most elevant channels such as
              Facebook.
            </p>

            <Buttion type={"submit"} text={"Learn more"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herotow;

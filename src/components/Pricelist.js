/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Buttion from "./Buttion";

const Pricelist = () => {
  return (
    <div class="mt-2 md:mt-10 flex justify-center">
      <div class="md:max-w-6xl">
        <div class="text-center flex justify-center">
          <div class="w-full md:w-2/3">
            <h1 class="text-2xl md:text-4xl font-bold">
              Get awesome features, without extra charges
            </h1>
            <p class="font-semibold text-lg">
              The rise of mobile devices transforms the way we consume
              information entirely and the world's most relevant channels such
              as Facebook.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-5">
          <div class="bg-white shadow-md rounded-xl overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-800 text-center">
                Plan A
              </h2>
              <div class="flex items-baseline justify-center mt-4">
                <span class="text-5xl font-bold tracking-tight text-gray-900">
                  $0
                </span>
                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  /Month
                </span>
              </div>
              <p class="text-sm text-gray-600 text-center mt-2">
                For small teams or office
              </p>
              <ul class="mt-4 text-gray-700 text-center">
                <li class="py-1">Drag & Drop Builder1</li>
                <li class="py-1">Drag & Drop Builder2</li>
                <li class="py-1">Drag & Drop Builder3</li>
                <li class="py-1">Drag & Drop Builder4</li>
              </ul>
              <div className="flex justify-center mt-2 md-5">
                {" "}
                <Buttion text={"Start free trail"} type={"submit"} />
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-xl overflow-hidden">
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-800 text-center">
                Plan B
              </h2>
              <div class="flex items-baseline justify-center mt-4">
                <span class="text-5xl font-bold tracking-tight text-gray-900">
                  $19
                </span>
                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  /Month
                </span>
              </div>
              <p class="text-sm text-gray-600 text-center mt-2">
                For larger teams or business
              </p>
              <ul class="mt-4 text-gray-700 text-center">
                <li class="py-1">Drag & Drop Builder1</li>
                <li class="py-1">Drag & Drop Builder2</li>
                <li class="py-1">Drag & Drop Builder3</li>
                <li class="py-1">Drag & Drop Builder4</li>
                <li class="py-1">Additional Feature 5</li>
              </ul>
              <div className="flex justify-center mt-2 md-5">
                {" "}
                <Buttion text={"Subscribe Now"} type={"submit"} />
              </div>
              <p className="text-sm text-blue-500 text-center mt-2 md:mt-5">
                Or Start 14 days trail{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;

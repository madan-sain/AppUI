import React from "react";
import phonefeatherig from "../image/imgfeather.jpg";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { MdMapsHomeWork, MdMovieEdit } from "react-icons/md";

const AppFeature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-5 space-x-4">
      <div>
        <span>
          <img src={phonefeatherig} alt="phone" className="w-fit" />
        </span>
      </div>
      <div>
        <div className="md:mt-[5rem] mt-2">
          <h1 className="text-3xl md:text-5xl font-bold">
            Awesome Apps <br />
            Features
          </h1>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center text-[2rem] text-red-500">
              <LiaTachometerAltSolid />
            </div>
            <div className="md:w-[50%] w-fill">
              <h1 className="font-semibold text-lg text-red-500">
                Fast Performance
              </h1>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center text-[2rem] text-blue-500">
              <MdMapsHomeWork />
            </div>
            <div className="md:w-[50%] w-fill">
              <h1 className="font-semibold text-lg text-blue-500">
                Prototyping
              </h1>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex items-center text-[2rem] text-green-500">
              <MdMovieEdit />
            </div>
            <div className="md:w-[50%] w-fill">
              <h1 className="font-semibold text-lg text-green-500">
                Vector Editing
              </h1>
              <p>
                Get your blood tests delivered at home collect a sample from the
                news your blood tests.
              </p>
            </div>
          </div>

          <div className="md:w-[50%] w-fill ms-10 mt-5 text-gray-600">
            <span className="">
              <h1 className="mb-5">
                {" "}
                India boasts approximately 750 million smartphone users and
                according to Deloitte's 2022 Global TMT predictions1, the
                smartphone market is projected to reach 1 billion users by 2026.
                Read more at:
              </h1>
              <h1>
                These statistics highlight how rapidly the mobile app
                development industry is expanding in India, presenting a huge
                opportunity for businesses to reach their target audience. Read
                more at:
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeature;

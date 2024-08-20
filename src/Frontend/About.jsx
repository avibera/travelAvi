import React from "react";
import { SliderShape } from "../Components/SliderShape";
import Heading from "../Components/Heading";
export const About = () => {
  return (
    <div>
      <div
        className="relative w-full h-[350px] sm:h-[500px]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=800)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1C1C1C] opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl sm:text-6xl text-white font-knit font-semibold text-center">
            About Us
          </h1>
        </div>
      </div>
      <SliderShape />
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <Heading
            className={"w-[300px] sm:w-[700px] mt-8"}
            classNameForDescription={"w-[300px] sm:w-[800px] mt-4"}
            name={"World Best Travel Agency Company Since 2006."}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            }
          />
        </div>
        <div className="absolute top-24 right-16">
          <img
            className=""
            src="https://travelami.jollyany.co/images/tz_travelami/World-map.png"
          />
        </div>
        <div className="h-[100px] w-[100px] sm:h-[200px] sm:w-[300px] absolute top-48 left-40">
          <img
            className=""
            src="https://travelami.jollyany.co/images/tz_travelami/plane.png"
          />
        </div>
      </div>
    </div>
  );
};

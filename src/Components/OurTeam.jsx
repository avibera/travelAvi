import React from "react";
import Heading from "./Heading";
import { Instagram } from "lucide-react";
import SocialMedia from "./SocialMedia";

const data = [
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner1.jpg",
    designation: "CEO",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner2.jpg",
    designation: "Marketing Manager",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner3.jpg",
    designation: "Sales Head",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner4.jpg",
    designation: "HR Manager",
  },
];
const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Heading
        name={"Our Team"}
        description={"Meet our team, we are here for you"}
      />
      <div className="flex justify-start gap-4 items-center">
        {data?.map((item, index) => (
          <div>
            <div
              key={index}
              className="overflow-hidden relative group hover:cursor-pointer"
            >
              <img
                className="w-[300px] h-[350px] object-cover group-hover:scale-105 transition-all duration-500"
                src={item?.image_path}
              />
              <div className="absolute inset-0 group-hover:bg-yellow-600 group-hover:cursor-pointer group-hover:opacity-60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center text-xl font-semibold font-knit text-white transition-all duration-300">
                <div className="hidden group-hover:block transition-all duration-500">
                  <SocialMedia isCard={true} />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-gray-700 font-knit text-lg">
                {item?.name}
              </p>
              <span className="text-sm text-gray-500">{item?.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

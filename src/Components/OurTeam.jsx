import React from "react";
import Heading from "./Heading";

const data = [
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner1.jpg",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner2.jpg",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner3.jpg",
  },
  {
    name: "Lilly Fernandes",
    image_path: "./images/OurTeamsBanner4.jpg",
  },
];
const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Heading name={"Our Team"} description={"Meet Our Team Members"} />
      <div className="flex justify-start gap-4 items-center">
        {data?.map((item, index) => (
          <div key={index} className="relative group hover:cursor-pointer">
            <img
              className="w-[300px] h-[350px] object-cover scale-95 group-hover:scale-100 transition-all duration-500"
              src={item?.image_path}
            />
            <div className="absolute bottom-10 left-4 text-xl font-semibold font-knit text-white">
              {item?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

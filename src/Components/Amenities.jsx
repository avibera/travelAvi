import { Bath, Coffee, Milk, Router } from "lucide-react";
import React from "react";

const data = [
  {
    icon: (
      <Coffee className="mx-auto h-8 w-8 text-yellow-500 group-hover:text-white" />
    ),
    name: "Breakfast Included",
  },
  {
    icon: (
      <Router className="mx-auto h-8 w-8 text-yellow-500 group-hover:text-white" />
    ),
    name: "Free Wifi",
  },
  {
    icon: (
      <Milk className="mx-auto h-8 w-8 text-yellow-500 group-hover:text-white" />
    ),
    name: "Water Bottels",
  },
  {
    icon: (
      <Bath className="mx-auto h-8 w-8 text-yellow-500 group-hover:text-white" />
    ),
    name: "Hotel Accomodation",
  },
];
const Amenities = () => {
  return (
    <div>
      <div className="flex justify-start">
        {data.map((item, index) => (
          <div className="mx-auto border p-4 h-[100px] w-[200px] group hover:bg-yellow-400 transition-all duration-300 hover:cursor-pointer">
            {item?.icon}
            <p className="text-center mt-2 text-sm text-gray-500 font-knit group-hover:text-white">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

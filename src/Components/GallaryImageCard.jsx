import { IndianRupee } from "lucide-react";
import React from "react";

const GallaryImageCard = ({ item }) => {
  return (
    <div className="relative group hover:cursor-pointer overflow-hidden">
      <div>
        <img
          className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
          src={item?.path}
        />
      </div>
      <div className="absolute bottom-10 left-4">
        <div className="text-white font-knit transition-transform duration-500 group-hover:translate-y-[-1rem]">
          <span className="text-3xl font-semibold">{item?.name}</span>
          <p className="hidden group-hover:block transition-transform duration-500">
            {item?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GallaryImageCard;

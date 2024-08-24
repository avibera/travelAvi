import { IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const ImageCard = ({ item }) => {
  const data = item.package;
  return (
    <Link to={`${item.slug}/package`} state={{ data }}>
      <div className="relative group">
        <div>
          <img className="w-full h-[400px] object-cover" src={item?.path} />
        </div>
        <div className="absolute inset-0 group-hover:bg-gray-800 group-hover:opacity-30 transition-all duration-300 group-hover:cursor-pointer"></div>
        <div className="absolute bottom-10 left-4">
          <div className="text-white font-sans transition-transform duration-500 group-hover:translate-y-[-1rem]">
            <span className="text-4xl font-extrabold">{item?.name}</span>
            <p className="hidden group-hover:block transition-transform duration-500">
              {item?.description}
            </p>
          </div>
          <div className="text-white text-2xl font-bold flex mt-2">
            <IndianRupee className="w-8 h-7 mt-1" />
            5000
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;

import React from "react";

const ImageCardWithPrice = ({ item }) => {
  return (
    <div className="">
      <img
        className="w-[380px] h-[230px] object-cover"
        src={item?.image_path}
      />
      <div className="py-8">
        <span className="text-gray-400 font-semibold">{item?.country}</span>
        <br />
        <span className="text-[29px] text-gray-700 font-knit py-2 hover:text-yellow-600 hover:cursor-pointer">
          {item?.place}
        </span>
        <br />
        <div className="py-1 text-gray-400 font-semibold">
          <span className="">From:</span> &nbsp;
          <span className="text-xl text-yellow-600 font-bold">
            {item?.price}
          </span>
        </div>
        <div>* * * * riview</div>

        <div className="border-b border-b-slate-200 mt-7 mb-6"></div>

        <div className="flex justify-between text-gray-400 font-knit px-1.5">
          <div>
            <p>Duration</p>
            <span className="text-xl text-gray-700">{item?.duration}</span>
          </div>
          <div>
            <p>Best time to travel</p>
            <span className="text-xl text-gray-700">
              {item?.best_time_to_visit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardWithPrice;

import React from "react";

const Heading = ({ name, description }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 pt-5 sm:pt-28 mb-4 sm:mb-10 ">
        <h2 className="text-3xl sm:text-5xl font-knit font-600 text-gray-700">
          {name}
        </h2>
        <p className="text-gray-400 text-sm sm:text-[17px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;

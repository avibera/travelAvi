import React from "react";

const Heading = ({ name, description }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 py-24">
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Heading;

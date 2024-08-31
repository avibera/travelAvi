import React from "react";

const Button = ({ additionalClass, label, onClick }) => {
  return (
    <div className="">
      <button
        onClick={(e) => onClick(e)}
        className={`text-white font-semibold bg-yellow-400 px-6 py-2.5 sm:px-8 sm:py-3 hover:bg-transparent hover:text-yellow-400 border border-yellow-400 hover:border-yellow-400 transition-all duration-300 ${additionalClass}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

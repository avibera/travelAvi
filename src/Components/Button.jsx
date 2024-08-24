import React from "react";

const Button = ({ additionalClass, label }) => {
  return (
    <div className="py-4">
      <button
        className={`text-white font-semibold bg-yellow-400 px-6 py-1.5 sm:px-8 sm:py-3 hover:bg-white hover:text-yellow-400 border hover:border-yellow-400 transition-all duration-300 ${additionalClass}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

import React from "react";

const TextInput = ({ labelName, placeholder, className, type }) => {
  return (
    <div className="text-gray-700 mt-1 font-knit">
      <label className="text-sm">{labelName}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} w-full bg-gray-200 p-3 mt-1 outline-none`}
      ></input>
    </div>
  );
};

export default TextInput;

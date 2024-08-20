import React from "react";

const TextInput = ({ labelName, placeholder, className }) => {
  return (
    <div className="text-gray-700">
      <label>{labelName}</label>
      <input
        placeholder={placeholder}
        className={`${className} w-full bg-gray-200 p-3 mt-2 outline-none`}
      ></input>
    </div>
  );
};

export default TextInput;

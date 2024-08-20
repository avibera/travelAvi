import React from "react";
import TextInput from "./TextInput";

export const SliderShape = ({ children }) => {
  return (
    <div className="absolute w-full z-10">
      <div className="hidden sm:block">
        <img
          src="https://demo.bosathemes.com/html/travele/assets/images/slider-pattern.png"
          className="w-full mt-[-60px] bg-no-repeat bg-center object-cover"
        />
      </div>
      <div className="flex justify-center mt-[-150px]">{children}</div>
    </div>
  );
};

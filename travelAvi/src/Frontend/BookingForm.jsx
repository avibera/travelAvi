import React from "react";
import TextInput from "../Components/TextInput";

export const BookingForm = () => {
  return (
    <div className="grid sm:grid-cols-4 gap-3 sm:gap-6 bg-white p-10 sm:p-12 shadow-xl">
      <TextInput
        labelName="Package"
        placeholder="Select package"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Phone"
        placeholder="Enter your phone"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Phone"
        placeholder="Enter your phone"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Phone"
        placeholder="Enter your phone"
        className={`p-2 sm:p-3`}
      />
    </div>
  );
};

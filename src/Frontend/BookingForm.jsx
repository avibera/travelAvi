import React from "react";
import TextInput from "../Components/TextInput";

export const BookingForm = () => {
  return (
    <div className="grid sm:grid-cols-4 sm:gap-6 bg-white p-8 sm:p-12 shadow-xl">
      <TextInput
        labelName="Package"
        placeholder="Select package"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Name"
        placeholder="Enter your name"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Phone"
        placeholder="Enter contact"
        className={`p-2 sm:p-3`}
      />
      <TextInput
        labelName="Email"
        placeholder="Enter your mail"
        className={`p-2 sm:p-3`}
      />
    </div>
  );
};

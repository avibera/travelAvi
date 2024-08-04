import React from 'react'
import TextInput from '../Components/TextInput';

export const BookingForm = () => {
  return (
      <div className="grid grid-cols-4 gap-6 bg-white p-12 shadow-xl">
          <TextInput labelName="Package" placeholder="Select package" />
          <TextInput labelName="Phone" placeholder="Enter your phone" />
          <TextInput labelName="Phone" placeholder="Enter your phone" />
          <TextInput labelName="Phone" placeholder="Enter your phone" />
      </div>
  );
}

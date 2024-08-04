import React from 'react'
import TextInput from './TextInput'

export const SliderShape = ({children}) => {
  return (
      <div className="absolute w-full z-10">
          <div>
              <img
                  src="https://demo.bosathemes.com/html/travele/assets/images/slider-pattern.png"
                  className="w-full mt-[-60px] bg-no-repeat bg-center object-cover"
              />
          </div>
          <div className="flex justify-center mt-[-150px]">
              {/* <div className="grid grid-cols-4 gap-6 bg-white p-12 shadow-xl">
                  <TextInput labelName="Package" placeholder="Select package" />
                  <TextInput labelName="Phone" placeholder="Enter your phone" />
                  <TextInput labelName="Phone" placeholder="Enter your phone" />
                  <TextInput labelName="Phone" placeholder="Enter your phone" /> 
              </div> */}
              {children}
          </div>
      </div>
  );
}

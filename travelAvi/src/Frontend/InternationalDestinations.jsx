import React from "react";
import Heading from "../Components/Heading";

const InternationalDestinations = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Heading
          name={"Go For International"}
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from"
          }
        />

        <div className="grid grid-cols-7 gap-6">
          <div className="col-span-5">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 overflow-hidden relative group">
                <img
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-all duration-500"
                  src="https://images.pexels.com/photos/452544/pexels-photo-452544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-gray-800 group-hover:cursor-pointer group-hover:opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-10 left-4">
                  <span className="text-white font-knit text-4xl font-semibold">
                    switzerland
                  </span>
                </div>
              </div>
              <div className=" overflow-hidden relative group">
                <img
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-all duration-500"
                  src="https://images.pexels.com/photos/3393546/pexels-photo-3393546.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-gray-800 group-hover:cursor-pointer group-hover:opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-10 left-4">
                  <span className="text-white font-knit text-4xl font-semibold">
                    Thailand
                  </span>
                </div>
              </div>
              <div className=" overflow-hidden relative group">
                <img
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-all duration-500"
                  src="https://images.pexels.com/photos/16792714/pexels-photo-16792714/free-photo-of-performer-in-costume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <div className="absolute inset-0 group-hover:bg-gray-800 group-hover:cursor-pointer group-hover:opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-10 left-4">
                  <span className="text-white font-knit text-4xl font-semibold">
                    Africa
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full col-span-2 h-[400px] bg-red-400">
            <div className="col-span-2 overflow-hidden relative group">
              <img
                className="w-full h-[725px] object-cover group-hover:scale-105 transition-all duration-500"
                src="https://images.pexels.com/photos/6556790/pexels-photo-6556790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-gray-800 group-hover:cursor-pointer group-hover:opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-10 left-4">
                <span className="text-white font-knit text-4xl font-semibold">
                  India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalDestinations;

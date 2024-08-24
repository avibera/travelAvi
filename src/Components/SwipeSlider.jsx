import React from "react";
import { register } from "swiper/element/bundle";
import Button from "./Button";
register();
let data = [
  {
    id: 1,
    category: 1,
    title: "EXPERIENCE NATURE'S BEAUTY",
    path: "https://images.pexels.com/photos/2132174/pexels-photo-2132174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    title: "YOUR ADVENTURE TRAVEL EXPERTS IN WORLD",
    path: "https://images.pexels.com/photos/19335690/pexels-photo-19335690/free-photo-of-woman-and-people-on-bridge-in-frankfurt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    title: "Traveling around the world",
    path: "https://images.pexels.com/photos/3007325/pexels-photo-3007325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];
export const SwipeSlider = () => {
  return (
    <>
      <swiper-container
        slides-per-view="1"
        navigation="true"
        // pagination="true"
        autoPlay={true}
        effect={"fade"}
      >
        {data?.map((item) => (
          <swiper-slide key={item?.id}>
            <div className="relative max-h-[900px]">
              <div className="w-full max-auto">
                <img
                  src={item?.path}
                  className="w-full h-[740px] object-cover"
                />
                <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
                <div className="absolute inset-0 flex justify-center items-center mt-[-100px]">
                  <div className="w-[350px] sm:w-[900px]">
                    <h2 className="text-white text-3xl sm:text-6xl font-extrabold text-center">
                      {item?.title}
                    </h2>
                    <p className="text-white text-sm text-center mt-10">
                      {item?.description}
                    </p>
                    <div className="flex justify-center pt-10">
                      {/* <button className="text-white bg-yellow-400 px-6 py-1.5 sm:px-8 sm:py-3">
                        Book Now
                      </button> */}
                      <Button label={"Discover More"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

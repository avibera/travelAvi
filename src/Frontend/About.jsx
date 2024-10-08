import React from "react";
import { SliderShape } from "../Components/SliderShape";
import Heading from "../Components/Heading";
import OurTeam from "../Components/OurTeam";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const data = [
  {
    icon: "/images/AboutUsBanner/guide.png",
    title: "2000+ Worldwide Guide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/images/AboutUsBanner/medal.png",
    title: "Award-Winning Travel Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/images/AboutUsBanner/hotel.png",
    title: "Partnerships with Leading Hotels and Airlines",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "/images/AboutUsBanner/airplane.png",
    title: "10+ Years Of Travel Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative w-full h-[350px] sm:h-[500px]"
        style={{
          backgroundImage: `url(/images/AboutUsBanner/AboutUsBanner.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1C1C1C] opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl sm:text-6xl text-white font-knit font-semibold text-center">
            About Us
          </h1>
        </div>
      </div>
      {/* <------------Head Section End-------------> */}

      <SliderShape />

      {/* <------------Head Section End-------------> */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <Heading
            className={"w-[300px] sm:w-[700px] mt-8"}
            classNameForDescription={"w-[300px] sm:w-[800px] mt-4"}
            name={"World Best Travel Agency Company Since 2006."}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            }
          />
        </div>
        <div className="absolute top-8 right-0 sm:top-24 sm:right-16">
          <img
            className="h-[150px] w-[250px] sm:h-full sm:w-full"
            src="/images/AboutUsBanner/World-map.png"
          />
        </div>
        <div className="h-[100px] w-[100px] sm:h-[200px] sm:w-[300px] absolute top-40 left-0 sm:top-96 sm:left-8">
          <img className="" src="/images/AboutUsBanner/plane.png" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 sm:py-40">
        <div
          className="w-full  sm:h-[600px]"
          style={{
            backgroundImage: `url(
              "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pt-10 sm:pt-16 mx-auto">
            <p className="text-center text-white text-lg font-knit">
              TRAVELAVI SPECIALS
            </p>
            <p className="text-center text-white text-3xl sm:text-[50px] font-semibold font-knit mt-2 sm:mt-6">
              Why We Are Best For You
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-2 mt-10 px-6 pb-10 sm:px-20">
            {data?.map((item, index) => (
              <div
                key={index}
                className="relative h-[340px] w-full sm:w-[250px] group hover:cursor-pointer mx-auto"
              >
                <div className="absolute inset-0 bg-gray-800 opacity-95 group-hover:opacity-60 transition-all duration-500 scale-100 group-hover:scale-105"></div>
                <div className="absolute inset-0 p-10 sm:p-8 text-white">
                  <img className="w-10 h-10 object-cover" src={item?.icon} />
                  <p className="text-2xl font-knit py-4">{item?.title}</p>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10 bg-[#1C1C1C]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-[380px] sm:w-[580px] mx-auto pt-6 sm:pt-0 sm:py-7">
            <div className="text-center p-2 sm:p-10">
              <p className="text-white text-[25px] sm:text-[45px] sm:mt-10 font-arbil">
                Plan A Trip Around <br></br> The World
              </p>

              <p className="text-gray-400 text-sm sm:text-lg font-knit py-5 sm:py-8">
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you’ll enjoy every step you make.
              </p>

              {/* <button className="text-white bg-yellow-400 px-6 py-1.5 sm:px-8 sm:py-3">
                Book Now
              </button> */}
              <Button label={"Book Now"} onClick={(e) => navigate("/")} />
            </div>
          </div>
          <div>
            <img
              className="w-full h-[330px] sm:h-[560px] overflow-hidden object-cover"
              src="/images/AboutUsBanner/world-tour.jpeg"
            />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <OurTeam />
      </div>
    </div>
  );
};

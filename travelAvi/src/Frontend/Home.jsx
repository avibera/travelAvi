import React from "react";
import { SwipeSlider } from "../Components/SwipeSlider";
import { SliderShape } from "../Components/SliderShape";
import { BookingForm } from "./BookingForm";
import PopularDestinations from "./PopularDestinations";
import InternationalDestinations from "./InternationalDestinations";
import LastMinuteOffers from "./LastMinuteOffers";

const data = [
  {
    id: 1,
    name: "Delhi",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
  {
    id: 2,
    name: "Goa",
    path: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Welcome to the most beautiful and exotic destinations in the world.",
  },
  {
    id: 3,
    name: "Mumbai",
    path: "https://images.pexels.com/photos/574324/pexels-photo-574324.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world.",
  },
  {
    id: 4,
    name: "Jaipur",
    path: "https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Welcome to the most beautiful and exotic destinations in the world.",
  },
];
export default function Home() {
  return (
    <>
      <SwipeSlider />
      <SliderShape children={<BookingForm />} />
      <PopularDestinations data={data} />

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 p-4 smp:p-0">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <img
                className="w-full h-[460px] overflow-hidden object-cover"
                src="https://i.redd.it/11rzivken0lb1.jpg"
              />
            </div>
            <div className="p-2 sm:p-10">
              <p className="text-[25px] sm:text-[45px] sm:mt-10 font-arbil">
                A Simply Perfect Place<br></br> To Get Lost
              </p>

              <p className="text-gray-400 text-lg font-knit py-5 sm:py-8">
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you’ll enjoy every step you make.
              </p>

              <button className="text-white bg-yellow-400 px-6 py-1.5 sm:px-8 sm:py-3">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-32">
        <InternationalDestinations />
      </div>

      <div className="bg-gray-100 mb-10 bg-black">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="w-[580px] mx-auto">
            <div className="text-center p-2 sm:p-10">
              <p className="text-white text-[25px] sm:text-[45px] sm:mt-10 font-arbil">
                A Simply Perfect Place<br></br> To Get Lost
              </p>

              <p className="text-gray-400 text-lg font-knit py-5 sm:py-8">
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you’ll enjoy every step you make.
              </p>

              <button className="text-white bg-yellow-400 px-6 py-1.5 sm:px-8 sm:py-3">
                Book Now
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-full h-[560px] overflow-hidden object-cover"
              src="https://img.freepik.com/premium-photo/little-girl-is-hugging-elephant-with-girl-back_199644-15771.jpg"
            />
          </div>
        </div>
      </div>

      <LastMinuteOffers />
    </>
  );
}

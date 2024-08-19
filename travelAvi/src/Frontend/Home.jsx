import React from "react";
import { SwipeSlider } from "../Components/SwipeSlider";
import { SliderShape } from "../Components/SliderShape";
import { BookingForm } from "./BookingForm";
import PopularDestinations from "./PopularDestinations";
import InternationalDestinations from "./InternationalDestinations";
import LastMinuteOffers from "./LastMinuteOffers";
import Footer from "./Footer";

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
                className="w-full h-[320px] sm:h-[460px] overflow-hidden object-cover"
                src="https://i.redd.it/11rzivken0lb1.jpg"
              />
            </div>
            <div className="text-center p-2 sm:p-10">
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

      <div className=" mb-10 bg-[#1C1C1C]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-[380px] sm:w-[580px] mx-auto py-7">
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
              className="w-full h-[330px] sm:h-[560px] overflow-hidden object-cover"
              src="https://img.freepik.com/premium-photo/little-girl-is-hugging-elephant-with-girl-back_199644-15771.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mb-40">
        <LastMinuteOffers />
      </div>

      <div className="relative">
        <div className="bg-gray-100">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <img
                className="w-full h-[420px] sm:h-[560px] overflow-hidden object-cover"
                src="https://images.pexels.com/photos/20369420/pexels-photo-20369420/free-photo-of-trees-in-deep-evergreen-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </div>
            <div className="w-[380px] sm:w-[580px] mx-auto py-6">
              <div className="text-center p-2 sm:p-10 sm:mt-14">
                <p className="text-gray-700 text-[25px] sm:text-[45px] sm:mt-10 font-arbil">
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
        <div
          className="absolute top-[-75px] left-0 right-0 p-8 sm:p-10 max-w-7xl mx-auto"
          style={{
            backgroundImage: `url(${`https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-7.jpg?id=222`})`,
          }}
        >
          <div className="sm:flex sm:justify-start items-center gap-40">
            <div className="text-center">
              <span className="text-3xl text-gray-800 font-arbil">
                Join Newsletter!
              </span>
              <p className="text-xl text-gray-800 font-knit">
                To receive our best deals
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[250px] sm:w-[620px] px-4 py-4 text-gray-800 outline-none font-knit"
                />
                <button className="text-white px-5 sm:px-16 py-4 font-knit bg-slate-800">
                  Suscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

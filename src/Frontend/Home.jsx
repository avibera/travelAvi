import React from "react";
import { SwipeSlider } from "../Components/SwipeSlider";
import { SliderShape } from "../Components/SliderShape";
import { BookingForm } from "./BookingForm";
import PopularDestinations from "./PopularDestinations";
import InternationalDestinations from "./InternationalDestinations";
import LastMinuteOffers from "./LastMinuteOffers";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Button from "../Components/Button";

const data = [
  {
    id: 1,
    name: "Delhi",
    slug: "delhi",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
    package: {
      package_name: "Delhi Tour Package (5 Days, 4 Nights)",
      package_price: "2000 /- person",
      package_gallry: [
        {
          id: 1,
          name: "Agra - Taj Mahal",
          path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Akshardham",
          path: "https://lh3.googleusercontent.com/proxy/GuuP9z9f8AKP6XBhTDH-3553S3iYXWOmXW0mj0fOzIGwzOj6agHwkQykP2dlphSEKYAEe-i_YVqVwBvSs_Figq_UdbfHxbwlzHmdnqYX03fVg1SZNTtiWb-IOE_kKN-d2wMXX3KztkwY5xB0uz61-adaZpsSwSw=s1360-w1360-h1020-rw",
        },
        {
          id: 3,
          name: "Indaia Gate",
          path: "https://lh3.googleusercontent.com/p/AF1QipNxZLVflzbAPtUZ7h3kKZsRCyHCYglkxmIq9O0g=s1360-w1360-h1020-rw",
        },
        {
          id: 4,
          name: "Red Fort",
          path: "https://media.istockphoto.com/id/1287042734/photo/tourists-visiting-the-red-fort-in-delhi-india.jpg?s=612x612&w=0&k=20&c=XvtZKWgPxHCnXlzUWJthVIEck1PCr4_OkLHOc2VlIIw=",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Goa",
    slug: "goa_beaches",
    path: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Welcome to the most beautiful and exotic destinations in the world.",
    package: {
      package_name: "Goa Tour Package With All Beaches(5 Days, 4 Nights)",
      package_price: "4000 /- person",
      package_gallry: [
        {
          id: 1,
          name: "Palolem Beach",
          path: "https://images.pexels.com/photos/4628177/pexels-photo-4628177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Deltin Royale Casino",
          path: "https://www.deltin.com/assets/subprop/sub_album_pic620231108.1101.jpg",
        },
        {
          id: 3,
          name: "Canacona Beach",
          path: "https://images.pexels.com/photos/11878089/pexels-photo-11878089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 4,
          name: "Morijim Beach",
          path: "https://images.pexels.com/photos/11145288/pexels-photo-11145288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    },
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
  const navigate = useNavigate();
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

              <p className="text-gray-400 text-sm sm:text-lg font-knit py-5 sm:py-8">
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you’ll enjoy every step you make.
              </p>

              <Button
                label={"Book Now"}
                onClick={() => navigate("/all-destinations")}
              />
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

              <p className="text-gray-400 text-sm sm:text-lg font-knit py-5 sm:py-8">
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you’ll enjoy every step you make.
              </p>

              <Button
                label={"Book Now"}
                onClick={(e) => navigate("/all-destinations")}
              />
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

                <p className="text-gray-400 text-sm sm:text-lg font-knit py-5 sm:py-8">
                  Treat yourself with a journey to your inner self. Visit a
                  mystique Tibet and start your spiritual adventure. We promise,
                  you’ll enjoy every step you make.
                </p>
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
              <span className="text-2xl sm:text-3xl text-gray-800 font-arbil">
                Join Newsletter!
              </span>
              <p className="text-sm sm:text-xl text-gray-800 font-knit">
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
    </>
  );
}

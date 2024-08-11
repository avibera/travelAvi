import React from "react";
import { SwipeSlider } from "../Components/SwipeSlider";
import { SliderShape } from "../Components/SliderShape";
import { BookingForm } from "./BookingForm";
import PopularDestinations from "./PopularDestinations";

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
      <div className="h-[100px]"></div>
    </>
  );
}

import { SeparatorHorizontal } from "lucide-react";
import React from "react";
import Heading from "../Components/Heading";
import MultiCarousel from "../Components/MultiCarousel";

const data = [
  {
    id: 1,
    country: "Aferica",
    place: "Aferica",
    price: "$1000",
    duration: "5 Days",
    best_time_to_visit: "Winter",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
  {
    id: 2,
    country: "Aferica",
    place: "Aferica",
    price: "$1000",
    duration: "5 Days",
    best_time_to_visit: "Winter",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
  {
    id: 3,
    country: "Aferica",
    place: "Aferica",
    price: "$1000",
    duration: "5 Days",
    best_time_to_visit: "Winter",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
  {
    id: 4,
    country: "Aferica",
    place: "Aferica",
    price: "$1000",
    duration: "5 Days",
    best_time_to_visit: "Winter",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
];
const LastMinuteOffers = () => {
  return (
    <div className="">
      <div className={` max-w-7xl mx-auto p-2 sm:p-0`}>
        <Heading
          name={"Last Minute Offers"}
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from"
          }
        />

        <MultiCarousel data={data} type={"cardWithPrice"} />
      </div>
    </div>
  );
};

export default LastMinuteOffers;

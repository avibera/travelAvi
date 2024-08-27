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
    image_path:
      "https://blog.dookinternational.com/wp-content/uploads/2022/11/1.Explore-Cape-Town-South-Africa-.jpg",
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
    image_path:
      "https://blog.dookinternational.com/images/posts/10.Ngorongoro-Conservation-Area.jpg",
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
    image_path:
      "https://www.planetware.com/wpimages/2020/07/south-africa-top-attractions-intro-paragraph-giraffes-sunset.jpg",
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
    image_path:
      "https://travel.usnews.com/dims4/USNEWS/6711694/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fvictoria_falls_cropped_445x280_urQE1cw.jpg",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
];
const LastMinuteOffers = () => {
  return (
    <div>
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

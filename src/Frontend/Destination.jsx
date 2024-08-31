import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../Components/Heading";
import { SliderShape } from "../Components/SliderShape";
import ImageCardWithPrice from "../Components/ImageCardWithPrice";

const destination = [
  {
    country: "India",
    place: "Goa",
    price: "$850",
    duration: "4 Days",
    best_time_to_visit: "Winter",
    image_path: "./images/canaconaBeach.jpeg",
  },
  {
    country: "India",
    place: "Delhi",
    price: "$950",
    duration: "5 Days",
    best_time_to_visit: "Spring",
    image_path:
      "https://images.pexels.com/photos/14520365/pexels-photo-14520365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "India",
    place: "Jaipur",
    price: "$900",
    duration: "3 Days",
    best_time_to_visit: "Winter",
    image_path:
      "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "India",
    place: "Kerala",
    price: "$1100",
    duration: "6 Days",
    best_time_to_visit: "Monsoon",
    image_path:
      "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "India",
    place: "Agra",
    price: "$700",
    duration: "2 Days",
    best_time_to_visit: "Winter",
    image_path: "./images/TajMahal.jpeg",
  },
  {
    country: "India",
    place: "Kolkata",
    price: "$800",
    duration: "4 Days",
    best_time_to_visit: "Autumn",
    image_path:
      "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  //   {
  //     country: "India",
  //     place: "Udaipur",
  //     price: "$1000",
  //     duration: "5 Days",
  //     best_time_to_visit: "Winter",
  //     image_path: "./images/udaipurLake.jpeg",
  //   },
  //   {
  //     country: "India",
  //     place: "Shimla",
  //     price: "$950",
  //     duration: "5 Days",
  //     best_time_to_visit: "Summer",
  //     image_path: "./images/shimlaHills.jpeg",
  //   },
];

const destinationList = [
  {
    countary: "India",
    slug: "india",
    countaryBanner: "./images/IndiaBanner1.jpeg",
    gallary: [
      {
        country: "India",
        place: "Goa",
        price: "$850",
        duration: "4 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/canaconaBeach.jpeg",
      },
      {
        country: "India",
        place: "Delhi",
        price: "$950",
        duration: "5 Days",
        best_time_to_visit: "Spring",
        image_path: "./images/TajMahal.jpeg",
      },
      {
        country: "India",
        place: "Kolkata",
        price: "$900",
        duration: "3 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/MaaDurga.jpeg",
      },
    ],
  },
  {
    countary: "Switzerland",
    slug: "switzerland",
    countaryBanner: "./images/switzerlandBanner.jpeg",
    gallary: [
      {
        country: "Switzerland",
        place: "The Geneva Water Fountain",
        price: "$850",
        duration: "4 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/The_Geneva_Water_Fountain.jpg",
      },
      {
        country: "Switzerland",
        place: "Lake Lugano",
        price: "$950",
        duration: "5 Days",
        best_time_to_visit: "Spring",
        image_path: "./images/Lake_Lugano.jpg",
      },
      {
        country: "Switzerland",
        place: "Swiss National Park",
        price: "$900",
        duration: "3 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/Swiss_National_Park.jpg",
      },
    ],
  },
  {
    countary: "Africa",
    slug: "africa",
    countaryBanner: "./images/Africa_Banner.jpg",
    gallary: [
      {
        country: "Africa",
        place: "Kruger National Park",
        price: "$850",
        duration: "4 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/Kruger_National_Park.jpg",
      },
      {
        country: "Africa",
        place: "Egypt",
        price: "$950",
        duration: "5 Days",
        best_time_to_visit: "Spring",
        image_path: "./images/Egypt.jpg",
      },
      {
        country: "Africa",
        place: "Mauritius",
        price: "$900",
        duration: "3 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/Mauritius.jpg",
      },
    ],
  },
  {
    countary: "Thailand",
    slug: "thailand",
    countaryBanner: "./images/Thailand_Banner.jpg",
    gallary: [
      {
        country: "Thailand",
        place: "The Grand Palace",
        price: "$850",
        duration: "4 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/The_Grand_Palace.jpg",
      },
      {
        country: "Thailand",
        place: "Ko Samui",
        price: "$950",
        duration: "5 Days",
        best_time_to_visit: "Spring",
        image_path: "./images/Ko_Samui.jpg",
      },
      {
        country: "Thailand",
        place: "Bangkok",
        price: "$900",
        duration: "3 Days",
        best_time_to_visit: "Winter",
        image_path: "./images/Bangkok.jpg",
      },
    ],
  },
];
const Destination = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  React.useEffect(() => {
    let found = destinationList.find((item) => item.slug === state?.slug);
    setSelectedCountry(found);
  }, [state]);

  if (state !== null && state !== undefined) {
    return (
      <div>
        <div
          className="relative w-full h-[350px] sm:h-[500px]"
          style={{
            backgroundImage: `url("${selectedCountry?.countaryBanner}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1C1C1C] opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl text-white font-knit font-semibold text-center">
              {selectedCountry?.countary}
            </h1>
          </div>
        </div>
        <SliderShape />

        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <Heading
            name={"Best Places of " + selectedCountry?.countary}
            description={"Choose Your Next Adventure"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center pb-20">
            {selectedCountry?.gallary?.map((item, index) => (
              <div key={index}>
                <ImageCardWithPrice item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="relative w-full h-[350px] sm:h-[500px]"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1C1C1C] opacity-40"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl text-white font-knit font-semibold text-center">
              Destination
            </h1>
          </div>
        </div>
        <SliderShape />
        <Heading
          name={"All Destination For You"}
          description={"Choose Your Next Adventure"}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center px-4 pb-20">
            {destination?.map((item, index) => (
              <div key={index}>
                <ImageCardWithPrice item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Destination;

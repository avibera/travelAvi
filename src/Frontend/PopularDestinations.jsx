import React from "react";
import Heading from "../Components/Heading";
import MultiCarousel from "../Components/MultiCarousel";
import ImageCard from "../Components/ImageCard";

const PopularDestinations = ({ data }) => {
  return (
    <div
      className="bg-fixed py-14 mt-52 sm:mt-0"
      style={{
        backgroundImage: `url(${`https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-background-2.jpg`})`,
        backgroundSize: "fill",
      }}
    >
      <div className={` max-w-7xl mx-auto p-2 sm:p-0`}>
        <Heading
          name={"Popular Destination"}
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from"
          }
        />
        <MultiCarousel data={data} />
      </div>
    </div>
  );
};

export default PopularDestinations;

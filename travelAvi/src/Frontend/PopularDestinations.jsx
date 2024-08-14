import React from "react";
import Heading from "../Components/Heading";
import MultiCarousel from "../Components/MultiCarousel";
import ImageCard from "../Components/ImageCard";

const PopularDestinations = ({ data }) => {
  return (
    <div className="mt-20 max-w-7xl mx-auto p-2 sm:p-0">
      <Heading
        name={"Popular Destination"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. Ithas roots in a piece of classical Latin literature from"
        }
      />
      <MultiCarousel data={data} />
    </div>
  );
};

export default PopularDestinations;

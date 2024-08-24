import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageCard from "./ImageCard";
import ImageCardWithPrice from "./ImageCardWithPrice";
import GallaryImageCard from "./GallaryImageCard";

const MultiCarousel = ({ data, type, isPackageDetails = false }) => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data &&
          data?.map((item, index) => (
            <div key={index}>
              <div className={`${isPackageDetails ? "sm:px-0.5" : "px-2"}`}>
                {type === "cardWithPrice" ? (
                  <ImageCardWithPrice item={item} />
                ) : isPackageDetails == true ? (
                  <GallaryImageCard item={item} />
                ) : (
                  <ImageCard item={item} />
                )}
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;

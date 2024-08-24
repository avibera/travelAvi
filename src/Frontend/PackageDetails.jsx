import React from "react";
import MultiCarousel from "../Components/MultiCarousel";
import { IndianRupee } from "lucide-react";
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";
import Amenities from "../Components/Amenities";
import { useLocation } from "react-router-dom";

const PackageDetails = ({}) => {
  const location = useLocation();
  const { state } = location;
  if (state?.data !== undefined && state?.data !== null) {
    return (
      <div className="">
        <MultiCarousel
          data={state?.data?.package_gallry}
          isPackageDetails={true}
        />
        <div className="max-w-7xl mx-auto py-12 sm:py-24 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-5">
            <div className="sm:col-span-5">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold font-knit text-gray-700">
                  {state?.data?.package_name}
                </h2>
                <div className="flex justify-start text-red-500 py-6 items-center ml-[-6px]">
                  <IndianRupee className="w-7 h-6" />
                  <span className="text-xl sm:text-[29px] font-semibold font-knit">
                    {state?.data?.package_price}
                  </span>
                </div>
                <div className="py-4">
                  <p className="text-gray-500 font-knit">
                    4 Nights 3 Days Kullu Manali with Rohtang Pass Family Tour
                    (Minimum 4 Persons Required) Volvo Semi sleeper bus, Private
                    cab for local sightseeing and 3 star hotel with
                    complementary Breakfast.
                  </p>
                </div>
                <div className="py-6">
                  <p className="text-gray-500 font-knit">
                    Day 1: Half day proceed to Visit the 460 years old Hadimba
                    Devi Temple, Tibetan Center & Monastery, Club House, Van
                    Vihar, Mall Road Manali and Vashisht Village, Known for its
                    hot Sulphur Spring Day 2: Early Morning proceed for Rohtang
                    Pass tour. One the way halt at Marhi, Ralha falls, Nehru
                    Kund, Solang Velly. You can enjoy rope way and paragliding
                    and snow adventure activity and back hotel. Day 3: Early
                    Morning start to visit sightseeing of Manikaran which is
                    located in the Parvati Valley between the Rivers Beas and
                    Parvati, near district Kullu Himachal Pradesh. It is at an
                    altitude of 1766 m and holy Gurudwara. In route cover the
                    Kasol Valley and Manikaran hot spring.
                  </p>
                </div>
                <div className="mt-16">
                  <Amenities />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div>
                <TextInput
                  labelName={"Name"}
                  placeholder={"Enter your name"}
                  className={``}
                />
                <TextInput
                  labelName={"Email"}
                  placeholder={"Enter your email"}
                  className={``}
                />
                <TextInput
                  labelName={"Phone"}
                  placeholder={"Enter your phone"}
                  className={``}
                />
                <TextInput
                  labelName={"City"}
                  placeholder={"Enter your city"}
                  className={``}
                />
                <TextInput
                  type={"number"}
                  labelName={"Duration"}
                  placeholder={"Enter your duration"}
                  className={``}
                />
                <div className="grid grid-cols-2 gap-3">
                  <TextInput
                    type={"date"}
                    labelName={"Start Date"}
                    placeholder={"Enter your start date"}
                    className={``}
                  />
                  <TextInput
                    type={"date"}
                    labelName={"End Date"}
                    placeholder={"Enter your end date"}
                    className={``}
                  />
                  <TextInput
                    type={"number"}
                    labelName={"Adult"}
                    placeholder={"Adults"}
                    className={``}
                  />
                  <TextInput
                    type={"number"}
                    labelName={"Kids"}
                    placeholder={"Kids"}
                    className={``}
                  />
                </div>
                <Button label={"Book Now"} additionalClass={"w-full text-lg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      <div className="h-[300px] w-[300px] border mt-96">
        <span className="text-5xl">No Data Found</span>
      </div>
    </div>;
  }
};

export default PackageDetails;

import React from "react";
import MultiCarousel from "../Components/MultiCarousel";
import { IndianRupee } from "lucide-react";
import TextInput from "../Components/TextInput";

const data = [
  {
    id: 1,
    name: "Delhi",
    slug: "delhi",
    path: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Welcome to the most beautiful and exotic destinations in the world",
  },
  {
    id: 2,
    name: "Goa",
    slug: "goa_beaches",
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
const PackageDetails = ({}) => {
  return (
    <div className="">
      <MultiCarousel data={data} isPackageDetails={true} />
      <div className="max-w-7xl mx-auto py-12 sm:py-24 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-5">
          <div className="sm:col-span-5">
            <div>
              <h2 className="text-2xl sm:text-4xl font-semibold font-knit text-gray-700">
                Kullu, Manali & Rohtang Pass (4 Nights 3 Days)
              </h2>
              <div className="flex justify-start text-red-500 py-6 items-center ml-[-6px]">
                <IndianRupee className="w-7 h-6" />
                <span className="text-xl sm:text-[29px] font-semibold font-knit">
                  10,750 Per Person
                </span>
              </div>
              <div className="py-4">
                <p className="text-gray-500 font-knit">
                  4 Nights 3 Days Kullu Manali with Rohtang Pass Family Tour
                  (Minimum 4 Persons Required) Volvo Semi sleeper bus, Private
                  cab for local sightseeing and 3 star hotel with complementary
                  Breakfast.
                </p>
              </div>
              <div className="py-6">
                <p className="text-gray-500 font-knit">
                  Day 1: Half day proceed to Visit the 460 years old Hadimba
                  Devi Temple, Tibetan Center & Monastery, Club House, Van
                  Vihar, Mall Road Manali and Vashisht Village, Known for its
                  hot Sulphur Spring Day 2: Early Morning proceed for Rohtang
                  Pass tour. One the way halt at Marhi, Ralha falls, Nehru Kund,
                  Solang Velly. You can enjoy rope way and paragliding and snow
                  adventure activity and back hotel. Day 3: Early Morning start
                  to visit sightseeing of Manikaran which is located in the
                  Parvati Valley between the Rivers Beas and Parvati, near
                  district Kullu Himachal Pradesh. It is at an altitude of 1766
                  m and holy Gurudwara. In route cover the Kasol Valley and
                  Manikaran hot spring.
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

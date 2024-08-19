import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1C1C1C] text-gray-100">
      <div className="max-w-7xl mx-auto pt-28">
        <div className="grid grid-cols-5 gap-8">
          <div className="py-2 col-span-2">
            <span className="text-3xl font-arbil">TravelAvi</span>
            <div className="">
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                eum debitis temporibus eius ipsam qui explicabo at corporis
                tempore nam hic ratione maiores enim nostrum dolorem eaque rem,
                blanditiis inventore.
              </p>
            </div>
          </div>
          <div className="py-2">
            <span className="text-3xl font-arbil">Contact</span>
            <div className="text-gray-400 mt-4">
              <div className="flex justify-start items-center gap-2 mt-2 hover:text-white">
                <Phone className="w-5 h-4" /> <span>+91 123456789</span>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2 hover:text-white">
                <Mail className="w-5 h-4" /> <span>wHqQ3@example.com</span>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2 hover:text-white">
                <MapPin className="w-5 h-4" /> <span>India, Delhi</span>
              </div>
            </div>
          </div>
          <div className="py-2">
            <span className="text-3xl font-arbil">Quick Links</span>
            <div className="text-gray-400 mt-4">
              <p>Home</p>
              <p>Destinations</p>
              <p>Blog</p>
              <p>About</p>
            </div>
          </div>
          <div className="py-2">
            <span className="text-3xl font-arbil">Suscribe</span>
            <div className="text-gray-400 mt-4">
              <p className="py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam,
              </p>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="your email..."
                  className="w-full px-4 py-3 text-gray-800 outline-none font-knit"
                />
                <button className="text-white w-full py-3 font-knit bg-yellow-400 mt-3">
                  Suscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-b-slate-700 mt-16"></div>
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-400">
            Copyright © 2024 TravelAvi. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

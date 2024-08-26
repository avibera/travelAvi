import { CircleX, Mail, Menu, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuList }) => {
  return (
    <ul className="flex items-center gap-x-20">
      {menuList?.map((menu, index) => (
        <li
          key={index}
          className="font-knit hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-all duration-300"
        >
          <Link to={menu?.slug} className="">
            {menu?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export const MenuBar = () => {
  const [Scroll, setScroll] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);

  const menuList = [
    {
      name: "Home",
      slug: "",
    },
    {
      name: "About Us",
      slug: "about-us",
    },
    {
      name: "Destinations",
      slug: "all-destinations",
    },

    {
      name: "Other Services",
      slug: "#!",
    },
    {
      name: "Contact Us",
      slug: "#!",
    },
  ];
  const HandleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full text-center top-0 z-[9999] transition-all duration-500 ${
        Scroll
          ? "bg-white sticky text-black shadow-xl"
          : "bg-white sm:bg-transparent fixed text-white"
      } `}
    >
      <div className="relative">
        <div className="flex justify-between sm:justify-start sm:gap-60 mx-auto items-center sm:w-5/6">
          <div className="items-center mt-0.5 p-2 px-4">
            {Scroll == true ? (
              <img
                src="./images/logo2.png"
                className="h-16 w-full object-cover transition-all duration-500"
              />
            ) : (
              <img
                src="./images/logo.png"
                className="h-20 sm:h-24 w-full object-cover transition-all duration-500"
              />
            )}
          </div>
          <div className="flex items-center gap-16">
            <div className="hidden lg:flex gap-x-2">
              <DesktopNav menuList={menuList} />
            </div>
          </div>
          <div className="sm:hidden">
            <Menu
              className="w-6 h-6 mr-4 text-yellow-400"
              onClick={(e) => {
                setToggled(!toggled);
              }}
            />
          </div>
        </div>
        <div
          className={`absolute h-screen  top-0 z-40 w-[95%] bg-white sm:hidden text-black transition-all duration-500 ${
            toggled ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="p-2 border-b border-gray-300">
            <div className="flex justify-between px-4">
              <div>
                <img
                  src="./images/logo.png"
                  className="h-20 w-full object-cover"
                />
              </div>
              <div>
                <CircleX
                  className="w-6 h-6 mt-4"
                  onClick={(e) => setToggled(false)}
                />
              </div>
            </div>
          </div>
          <ul className="flex flex-col justify-start items-center mt-6 gap-8">
            {menuList?.map((menu, index) => (
              <li key={index} className="font-knit text-gray-700">
                <Link to={menu?.slug} onClick={(e) => setToggled(false)}>
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-[-10px] h-[100px] w-[100%] bg-yellow-400 p-4 font-knit text-white">
            <div className="flex justify-start gap-4">
              <Phone className="w-5 h-5 mt-1" /> +91 123456789, +91 123456789{" "}
            </div>
            <div className="flex justify-start gap-4 mt-2">
              <Mail className="w-5 h-5 mt-1" />
              wHqQ3@example.com
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

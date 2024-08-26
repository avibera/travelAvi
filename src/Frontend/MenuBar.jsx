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
          : "bg-transparent fixed text-white"
      } `}
    >
      <div>
        <div className="flex justify-start gap-60 mx-auto items-center w-5/6">
          <div className="items-center mt-0.5 p-2">
            {Scroll == true ? (
              <img
                src="./images/logo2.png"
                className="h-16 w-full object-cover transition-all duration-500"
              />
            ) : (
              <img
                src="./images/logo.png"
                className="h-24 w-full object-cover transition-all duration-500"
              />
            )}
          </div>
          <div className="flex items-center gap-16">
            <div className="hidden lg:flex gap-x-2">
              <DesktopNav menuList={menuList} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

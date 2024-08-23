import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const icons = [
  {
    icon: <Instagram className="h-4 w-4" />,
    iconCard: <Instagram className="h-5 w-5" />,
  },
  {
    icon: <Facebook className="h-4 w-4" />,
    iconCard: <Facebook className="h-5 w-5" />,
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    iconCard: <Linkedin className="h-5 w-5" />,
  },
  {
    icon: <Youtube className="h-4 w-4" />,
    iconCard: <Youtube className="h-5 w-5" />,
  },
  {
    icon: <Twitter className="h-4 w-4" />,
    iconCard: <Twitter className="h-5 w-5" />,
  },
];

const SocialMedia = ({ isFooter = false, isCard = false }) => {
  if (isFooter) {
    return (
      <div className="flex justify-start items-center gap-4 mt-4">
        {icons.map((item, index) => (
          <div className="text-white hover:cursor-pointer hover:text-yellow-400 hover:mt-[-8px] border-2 hover:border-yellow-400 rounded-full p-2 transition-all duration-300">
            {item.icon}
          </div>
        ))}
      </div>
    );
  } else if (isCard) {
    return (
      <div className="flex justify-start items-center gap-1 mt-4">
        {icons.map((item, index) => (
          <div className="text-black hover:cursor-pointer hover:text-white hover:mt-[-10px] rounded-full p-2 transition-all duration-300">
            {item.iconCard}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-start items-center gap-2">
        <div className="rounded-full bg-white p-2 hover:bg-yellow-300 hover:text-white transition-all duration-300">
          <Instagram className="h-5 w-5" />
        </div>
      </div>
    );
  }
};

export default SocialMedia;

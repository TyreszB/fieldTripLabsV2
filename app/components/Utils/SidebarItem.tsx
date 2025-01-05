import React, { useContext, useState } from "react";
import Link from "next/link";
import { SidebarContext } from "./Sidebar";
import {
  HomeIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface SidebarItem {
  icon?: React.ReactNode;
  text: string;
  path: string;
  active: boolean;
}

const sidebarData: SidebarItem[] = [
  {
    icon: <HomeIcon />,
    text: "Home",
    path: "/",
    active: true,
  },
  {
    icon: <PencilSquareIcon />,
    text: "Create Itinerary",
    path: "/itinerary",
    active: false,
  },
  {
    icon: <UserIcon />,
    text: "Profile",
    path: "/profile",
    active: false,
  },
];

const SidebarItem = () => {
  const { expanded } = useContext(SidebarContext);

  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleClick = (text: string) => {
    setActiveItem(text);
  };

  return (
    <ul className="mt-10 flex flex-col">
      {sidebarData.map((item) => (
        <button onClick={() => handleClick(item.text)} key={item.text}>
          <Link href={item.path}>
            <li
              className={`relative flex items-center  py-2 px-3 my-4 font-medium rounded-md cursor-pointer transition-colors w-150 h-10
              ${
                activeItem === item.text
                  ? "bg-gradient-to-t from-sky-200 to-sky-100 text-sky-800"
                  : "hover:bg-sky-50 text-gray-600"
              }`}
            >
              <div className="h-6 w-6">{item.icon}</div>
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? " w-[150px] ml-3" : "hidden"
                }`}
              >
                {item.text}
              </span>
            </li>
          </Link>
        </button>
      ))}
    </ul>
  );
};

export default SidebarItem;

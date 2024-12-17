"use client";
import React, { useState, createContext } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

const SidebarContext = createContext();

const Sidebar = ({ children }: any) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-gray border-r shadow-sm ${
          expanded ? "w-[200px]" : "w-100"
        }`}
      >
        <div className=" p-4 pb-2 flex justify-around items-center">
          <Image
            src={Logo}
            alt="Logo"
            className={`overflow-hidden transition-all  ${
              expanded ? "pl-4 w-[100px]" : "w-0"
            }`}
          />
          <button
            className=" flex p-1.5 rounded-lg bg-white h-10 w-10"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ArrowLeftCircleIcon /> : <ArrowRightCircleIcon />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <Image src={Logo} alt="placeholder" className="w-10 h-10" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">Johndoe@gmail.com</span>
            </div>
            <Bars3BottomRightIcon className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

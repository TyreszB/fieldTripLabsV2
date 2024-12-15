"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ children }: any) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray border-r shadow-sm w-[300px]">
        <div className=" p-4 pb-2 flex justify-around items-center">
          <Image src={Logo} alt="Logo" className="pl-4 w-32" />
          <button className="p-1.5 rounded-lg bg-white h-5 w-5">
            <ArrowLeftCircleIcon className="w-8 h-8" />
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <Image src={Logo} alt="placeholder" className="w-10 h-10" />
          <div className="flex justify-between items-center ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">Johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

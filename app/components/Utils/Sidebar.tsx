"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { UserIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ children }: any) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray border-r shadow-sm w-[300px]">
        <div className=" p-4 pb-2 flex justify-between items-center">
          <Image src={Logo} alt="Logo" className="w-32" />
          <button className="p-1.5 rounded-lg bg-white h-5 w-5">
            <UserIcon className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

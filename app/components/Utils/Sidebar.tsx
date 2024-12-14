"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { CheveronLeft } from "@heroicons/react";

// Sidebar component

const Sidebar = ({ children }: any) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray-50 border border-r shadow-sm">
        <div className=" p-4 pb-2 flex justify-between items-center">
          <Image src={Logo} alt="Logo" width={100} height={100} />
          <button>
            <CheveronLeft />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";

const Sidebar = ({ children, expanded, setExpanded }: any) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray border-r shadow-sm">
        <div className=" p-4 pb-2 flex justify-between items-center">
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

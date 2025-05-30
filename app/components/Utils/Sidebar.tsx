"use client";
import React, { useState, createContext, useMemo } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";
import capitalize from "../../Util/capitalize";

export const SidebarContext = createContext({ expanded: true });

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const contextValue = useMemo(() => ({ expanded }), [expanded]);

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-gray border-r shadow-sm ${
          expanded ? "w-[250px]" : "w-100"
        }`}
      >
        <div className=" p-4 pb-2 flex justify-around items-center">
          <Image
            src={Logo}
            alt="Logo"
            priority={true}
            className={`overflow-hidden transition-all  ${
              expanded ? "pl-4 w-[100px]" : "w-0"
            }`}
          />
          <button
            className=" flex p-1.5 rounded-lg bg-white h-9 w-9"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <ul className="flex-1 px-3">
          <SidebarContext.Provider value={contextValue}>
            <SidebarItem />
          </SidebarContext.Provider>
        </ul>
        <div className="border-t flex p-3">
          {/* {data?.user?.image ? (
            <Image
              src={data.user.image}
              alt="Profile Image"
              className="rounded-md"
              width={50}
              height={10}
            />
          ) : ( */}
            <Image src={Logo} alt="placeholder" className="w-10 h-10" />
          {/* )} */}
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            {/* <div className="leading-4">
              <h4 className="font-semibold">{`${capitalize(
                data?.user?.name?.split(" ")[0] ?? ""
              )}  ${capitalize(data?.user?.name?.split(" ")[1] || "")}`}</h4>
              <span className="text-xs text-gray-600">
                {capitalize(data?.user?.email ?? "")}
              </span>
            </div> */}
          </div>

          <button
            className={expanded ? `w-8` : "hidden"}
            onClick={() => signOut()}
          >
            <ArrowLeftOnRectangleIcon />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

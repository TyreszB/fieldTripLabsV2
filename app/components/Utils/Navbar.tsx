"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isLoggdIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex flex-1 justify-around mt-3">
          <div>
            <Link href={"/itinerary"}>Create</Link>
          </div>
          <div>
            <Link href={"/about"}>About Us</Link>
          </div>
          <div>
            <Link href={"/"}>Home</Link>
          </div>
        </div>
        {isLoggdIn ? (
          <div className="flex flex-1 justify-between ">
            <div clasName="p-3">
              <Link href={"#"}>My Profile</Link>
            </div>
            <div clasName="p-3">
              <Link href={"#"}>Logout</Link>
            </div>
          </div>
        ) : (
          <div className=" flex flex-1 justify-end">
            <div className="p-3">
              <Link href={"/signup"}>Sign Up</Link>
            </div>
            <div className="p-3">
              <Link href={"login"}>Login</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

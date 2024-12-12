"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex flex-1 justify-around mt-3">
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/itinerary"}>Create</Link>
          </div>
          <div>
            <Link href={"/about"}>About Us</Link>
          </div>
        </div>
        <div className="flex flex-1 justify-between ">
          <div className="p-3">
            <Link href={"#"}>My Profile</Link>
          </div>
          <div className="p-3">
            <Link href={"#"}>Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

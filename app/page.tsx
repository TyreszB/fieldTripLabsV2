"use client";

import { Roboto } from "next/font/google"

import Sidebar from "./components/Utils/Sidebar";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});


export default function Home({ children }: { children: React.ReactNode }) {
 

      

  return (
    <main className="w-screen bg-sky-50" style={{ fontFamily: roboto.style.fontFamily }}  >
      <Sidebar />
      {children}
    </main>
  );
}


"use client"
import React from "react";
import Sidebar from "../components/Utils/Sidebar";
import type { AppProps } from "next/app";





export default function ClientLayout({ children }: { children: React.ReactNode}) {

  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>

   
    
  )    
    
}
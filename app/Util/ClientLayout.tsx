"use client"
import React from "react";
import Sidebar from "../components/Utils/Sidebar";
import { useAuth } from "react-oidc-context";
import AuthWrapper from "./AuthWrapper";

export default function ClientLayout({ children }: { children: React.ReactNode}) {

  return (
    <AuthWrapper>


        <div className="flex">
            <Sidebar />
            {children}
        </div>
    </AuthWrapper>
    
  )    
    
}
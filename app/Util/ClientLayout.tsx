"use client"
import React from "react";
import Sidebar from "../components/Utils/Sidebar";
import { useAuth } from "react-oidc-context";
import AuthWrapper from "./AuthWrapper";

export default function ClientLayout({ children }: { children: React.ReactNode}) {
  const signOutRedirect = () => {
    auth.signoutRedirect();
  }

  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
  return (
    <AuthWrapper>


        <div className="flex">
            <Sidebar />
            {children}
        </div>
    </AuthWrapper>
    
  )    } else {
    return (
      
        <div>
          <button onClick={() => auth.signinRedirect()}>Sign in</button>
          <button onClick={() => signOutRedirect()}>Sign out</button>
        </div>
      );
    }
}
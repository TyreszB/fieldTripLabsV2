"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Sidebar from "./components/Utils/Sidebar";

export default function Home({ children }: { children: React.ReactNode }) {

  const { data: session } = useSession();

  //need to figure out how to handle the cognito sign in

  if (!session) {
    return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with google</button>
      <button onClick={() => signIn("cognito")}>Sign in with cognito</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
    );
  }
 
  

  return (  
    <main className="w-screen bg-sky-50"  >
      <Sidebar />
      {children}
    </main>
  );
}


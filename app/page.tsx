"use client";

import Sidebar from "./components/Utils/Sidebar";


export default function Home({ children }: { children: React.ReactNode }) {


      

  return (
    <main className="w-screen bg-sky-50">
      <Sidebar />
      {children}
    </main>
  );
}


"use client";

import GoogleMap from "../components/Utils/GoogleMap";



export default function Home() {
 

  return (
    <main className="w-screen bg-sky-50">
      <div className="flex justify-around">
        <div className="w-auto">
          <GoogleMap />
        </div>
      </div>
    </main>
  );
}

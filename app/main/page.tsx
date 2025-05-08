"use client";
import capitalize from "../Util/capitalize";

import GoogleMap from "../components/Utils/GoogleMap";
import ClientLayout from "../Util/ClientLayout";


export default function Home() {
 

  return (
    <main className="w-screen bg-sky-50">
      <ClientLayout>

      <div className="flex justify-around">
        
      </div>
      <div className="w-auto">
        <GoogleMap />
      </div>
      </ClientLayout>
    </main>
  );
}

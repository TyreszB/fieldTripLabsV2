"use client";
import { useSession } from "next-auth/react";
import capitalize from "../Util/capitalize";

import GoogleMap from "../components/Utils/GoogleMap";

interface SessionData {
  name: string | null;
  email: string | null;
  image: string | null;
}

export default function Home() {
 

  return (
    <main className="w-screen bg-sky-50">
      <div className="flex justify-around">
        {/* <div className="py-5 text-[50px]">Welcome {capitalize(firstName)}</div> */}
      </div>
      <div className="w-auto">
        <GoogleMap />
      </div>
    </main>
  );
}

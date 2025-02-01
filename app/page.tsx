"use client";
import { useSession } from "next-auth/react";
import capitalize from "./Util/capitalize";
import PlacesAutocomplete from "./components/Utils/PlacesAutocomplete";
import GoogleMap from "./components/Utils/GoogleMap";

interface SessionData {
  name: string | null;
  email: string | null;
  image: string | null;
}

export default function Home() {
  // const { data } = useSession();

  // const firstName = data?.user?.name?.split(" ")[0] ?? "Guest";

  return (
    <main className="w-screen bg-sky-50">
      <div className="flex justify-around">
        {/* <div className="py-5 text-[50px]">Welcome {capitalize(firstName)}</div> */}
      </div>
      <div className="w-auto">
        <div className="flex justify-around mt-[50px]">
          <PlacesAutocomplete />
        </div>
        <GoogleMap />
      </div>
    </main>
  );
}

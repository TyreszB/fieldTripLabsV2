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
  const { data } = useSession();

  if (!data?.user) {
    return <div>Loading...</div>;
  }

  const firstName = data.user?.name?.split(" ")[0] ?? "Guest";

  return (
    <main>
      <div className="flex flex-1 justify-around">
        <div className="p-5 ">Welcome {capitalize(firstName)},</div>
      </div>
      <div>Search your dream destination ...</div>
      <div>
        <PlacesAutocomplete />
        <GoogleMap />
      </div>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {/* add google maps places */}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {/* add google maps places */}
        </ul>
      </div>
    </main>
  );
}

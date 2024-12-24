"use client";
import { useSession } from "next-auth/react";
import capitalize from "./Util/capitalize";
import PlacesAutocomplete from "./components/Utils/PlacesAutocomplete";

interface SessionData {
  name: string;
  email: string;
  image: string;
}

export default function Home() {
  const { data }: SessionData = useSession();

  const firstName = data.user.name.split(" ")[0];

  return (
    <main>
      <div className="flex flex-1 justify-around">
        <div className="p-5 ">Welcome {capitalize(firstName)},</div>
      </div>
      <div>Search your dream destination ...</div>
      <div>
        <PlacesAutocomplete />
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

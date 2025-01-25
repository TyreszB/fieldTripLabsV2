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
      <div className="flex justify-around">
        <div className="py-5 ">Welcome {capitalize(firstName)}</div>
      </div>
      <div>Search your dream destination ...</div>
      <div className="w-screen">
        <PlacesAutocomplete />
        <GoogleMap />
      </div>
    </main>
  );
}

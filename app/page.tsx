"use client";
import { useSession } from "next-auth/react";
import capitalize from "./Util/capitalize";

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
    </main>
  );
}

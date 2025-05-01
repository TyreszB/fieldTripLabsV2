"use client";

import capitalize from "./Util/capitalize";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import GoogleMap from "./components/Utils/GoogleMap";
Amplify.configure(outputs);



export default function Home() {


  return (
    <Authenticator>
      {({ signOut, user }) => (
    <main className="w-screen bg-sky-50">
      <div className="flex justify-around">
      </div>
      <div className="w-auto">
        <GoogleMap />
      </div>
    </main>
    )}
    </Authenticator>
  );
}

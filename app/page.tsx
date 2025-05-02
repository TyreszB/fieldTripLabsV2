"use client";
import capitalize from "./Util/capitalize";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";




export default function Home() {
  Amplify.configure(outputs);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="w-screen bg-sky-50">
          <div>
            <h1>Welcome {capitalize("Tyresz")}</h1>
          </div>
     
        </main>
      )}
    </Authenticator>
  );
}

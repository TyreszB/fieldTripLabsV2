"use client";
import capitalize from "./Util/capitalize";
import { Authenticator, View, Image } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Logo from "../public/logo.png";
import { useTheme } from "@aws-amplify/ui-react";


export default function Home() {
  Amplify.configure(outputs);

  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Field Trip Labs logo"
            src={Logo.src}
          />
        </View>
      );
    },
}
      

  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main className="w-screen bg-sky-50">
          <div>
            <h1>Welcome {capitalize(user?.username || '')}</h1>
          </div>
     
        </main>
      )}
    </Authenticator>
  );
}


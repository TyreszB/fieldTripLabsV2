"use client";
import capitalize from "./Util/capitalize";
import { Authenticator, View, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Logo from "../public/logo.png";
import { useTheme } from "@aws-amplify/ui-react";


export default function Home() {

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

    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; Field Trip Labs
          </Text>
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


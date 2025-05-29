"use client";
import { Authenticator, useTheme, View, Text, Image } from '@aws-amplify/ui-react'
import Logo from "../../public/logo.png";
import "@aws-amplify/ui-react/styles.css";

// TODO: need to fix the auth for google



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

const SignIn = () => {
  return (
    <div>
      <Authenticator 
        components={components}
        initialState="signIn"
        socialProviders={['google']}
      />
    </div>
  )
}

export default SignIn
"use client"

import { AuthProvider, useAuth } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
    client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI,
    response_type: "code",
    scope: "email openid phone",
  };

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    if (typeof window === "undefined") return null;

   

  return <AuthProvider {...cognitoAuthConfig}>

    {children}
    </AuthProvider>
 
}
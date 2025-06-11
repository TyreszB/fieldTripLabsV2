import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CognitoProvider from "next-auth/providers/cognito";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth credentials");
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID || "",
            clientSecret: process.env.COGNITO_CLIENT_SECRET || "",
            issuer: process.env.COGNITO_CLIENT_ISSUER || "",
            authorization: {
                params: {
                    scope: "email openid phone"
                }
            }
        })
    ],
    pages: {
        signIn: '/',
        error: '/'
    }
});

export { handler as GET, handler as POST };
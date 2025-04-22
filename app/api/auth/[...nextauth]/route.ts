import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: "",
      issuer: process.env.COGNITO_ISSUER ?? "",
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.idToken;
      return session;
    },
    async jwt({ token, account }: { token: any; account: any }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
  debug: true,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

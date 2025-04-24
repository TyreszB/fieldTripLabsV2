
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./global.css";


import ClientLayout from "./Util/ClientLayout";
import AuthWrapper from "./Util/AuthWrapper";
import { useAuth } from "react-oidc-context";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Field Trip Labs",
};



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={roboto.className}>
        
         <ClientLayout>
            {children}
          </ClientLayout>
        
      </body>
    </html>
  );

}

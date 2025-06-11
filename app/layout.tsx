
import type { Metadata } from "next";



import "./global.css";

import Auth from "./Util/Auth";
import { Roboto } from "next/font/google";




export const metadata: Metadata = {
  title: "Field Trip Labs",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
}); 


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



 


  return (
   
    <html lang="en">
      <body style={{ fontFamily: roboto.style.fontFamily }}>
        <Auth>
            {children}  
        </Auth>
      </body>
    </html>
       
   
  );

}

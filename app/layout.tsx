
import type { Metadata } from "next";
import { Roboto } from "next/font/google";


import "./global.css";

import Auth from "./Util/Auth";
import Sidebar from "./components/Utils/Sidebar";

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
      <body>
        <Auth>
            {children}  
        </Auth>
      </body>
    </html>
       
   
  );

}

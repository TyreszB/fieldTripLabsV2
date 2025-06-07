
import type { Metadata } from "next";



import "./global.css";

import Auth from "./Util/Auth";




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

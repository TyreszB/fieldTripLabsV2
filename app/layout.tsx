import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Utils/Navbar";
import Sidebar from "./components/Utils/Sidebar";
import "./global.css";

import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Field Trip Labs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider>
            <Sidebar />
            {children}
          </SessionProvider>
        </body>
      </html>
    </>
  );
}

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import Sidebar from "./components/Utils/Sidebar";
import "./global.css";

import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";

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
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider session={session}>
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {Inter} from 'next/font/google';

import "./globals.css";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "moviescreel app | movies at your fingertip",
  description: "Download and enjoy movies at your fingertip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} h-full w-full bg-[#29292e]  p-4 md:px-24 my-5 md:py-8 `}
      >
        <Header/>
        <Sidebar/>
        {children}

        <Footer/>

      </body>
    </html>
  );
}

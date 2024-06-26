import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Provider from "./context/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navbar/>
        <div className="pt-20 p-3 sm:hidden block">
        <SearchBar/>
        </div>
        
        {children}
        </Provider>
        </body>
    </html>
  );
}

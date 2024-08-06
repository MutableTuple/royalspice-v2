import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "./_components/Navbar";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "#1 Indiaas restaurant in de buurt | Royal Spice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}

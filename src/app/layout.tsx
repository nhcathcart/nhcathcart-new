import "./globals.css";
import Navbar from "../components/navbar";
import { Roboto_Flex } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | nhcathcart",
    default: "nhcathcart",
  },
  description: "Nicholas Cathcart's personal website.",
};
const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} h-full w-full`}>
      <body className="bg-background text-text font-oswald h-full w-full">
        <Navbar />
        <div className="pt-[80px] h-full w-full relative">
          {children}
        </div>
      </body>
    </html>
  );
}

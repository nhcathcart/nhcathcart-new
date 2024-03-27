import { draftMode } from "next/headers";
import "./globals.css";
import LiveVisualEditing from "../components/live-visual-editing";
import Navbar from "../components/navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
        <div className="pt-[80px] h-full w-full">
          {children}
        </div>
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}

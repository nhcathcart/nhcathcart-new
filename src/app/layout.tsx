
import { draftMode } from "next/headers";
import "./globals.css";
import LiveVisualEditing from "../components/live-visual-editing";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}

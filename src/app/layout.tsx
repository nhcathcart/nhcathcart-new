import './globals.css';
import Navbar from '../components/navbar';
import { Roboto_Flex } from 'next/font/google';
import { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  metadataBase: new URL('https://nhcathcart-new.vercel.app'),
  title: {
    template: '%s | nhcathcart',
    default: 'nhcathcart'
  },
  description: "Nicholas Cathcart's personal website.",
  openGraph: {
    title: "nhcathcart",
    description:
      "Nicholas Cathcart. I build stuff for the internet",
    url: "https://nhcathcart-new.vercel.app",
    siteName: "nhcathcart-new.vercel.app",
    locale: "en_US",
    type: "website",
  },
};
const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-oswald'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en" className={`${roboto.variable} h-full w-full`}>
      
      <body className="h-full w-full bg-background font-oswald text-text">
        <Navbar />
        <div className="relative h-full w-full pt-[80px]">{children}</div>
      </body>
      <Script type="text/javascript" src={"/heap-snippet.js"}/>
    </html>
  );
}

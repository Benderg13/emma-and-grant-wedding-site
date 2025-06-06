import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./globals.css";

const tanPearl = localFont({
    src: '../../public/fonts/tan-pearl.woff2',
    variable: '--font-tanPearl',
    display: 'swap'
})

const montserrat = Montserrat({
    variable: "--font-montserrat",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Emma and Grant's Wedding",
  description: "Emma and Grant's Wedding",
  icons: {
    icon: 'flavicon.ico',
  }
};

export default function RootLayout({ 
    children,
 }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={` ${tanPearl.className} ${montserrat.variable} antialiased`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
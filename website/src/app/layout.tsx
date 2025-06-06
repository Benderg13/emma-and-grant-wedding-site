import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
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
};

export default function RootLayout({ 
    children,
 }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${montserrat.variable} ${tanPearl.className} antialiased`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
import { Geist, Geist_Mono, Changa } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PortfolioComp from "@/components/PortfolioComp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changa = Changa({
  subsets: ["latin", "arabic"], 
  weight: ["400", "700"], 
});

export const metadata = {
  title: "Asrar Marair",
  description: "Personal Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico", sizes: "128x128" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${changa.className}`}
      >
       
        <Header/>
        {children}
      </body>
    </html>
  );
}

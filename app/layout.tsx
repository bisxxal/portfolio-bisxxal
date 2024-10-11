import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "@/components/Scrolling";
import Navbar from "@/components/Navbar";

 
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "bisxxal",
  description: "portfolio by bishal kandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${geistMono.variable} antialiased`}
      >
          <SmoothScrolling>
            <Navbar />
            {children}</SmoothScrolling>
      </body>
    </html>
  );
}

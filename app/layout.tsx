import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/Scrolling"; 
import { Toaster } from "react-hot-toast";

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
      <body className=" relative ">
          <SmoothScrolling>
         
              {children}
              <Toaster />
            </SmoothScrolling>
      </body>
    </html>
  );
}

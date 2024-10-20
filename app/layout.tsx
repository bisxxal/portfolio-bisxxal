import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/Scrolling"; 

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
      <body>
          <SmoothScrolling>
         
              {children}
            </SmoothScrolling>
      </body>
    </html>
  );
}

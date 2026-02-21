import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/Scrolling";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Bishal",
  description: "portfolio of bishal kandi",
  keywords: "bishal kandi portfolio,bishal portfolio, bishal kandi, bishal , bishal portfolio",
  openGraph: {
    url: "https://bishal.online",
    title: "bishal",
    description: "portfolio of bishal kandi",
    images: [
      "https://bishal.online/favicon.ico"
    ],
  },
  twitter: {
    title: "Bishal",
    description: "portfolio of bishal kandi",
    images: [
      "https://bishal.online/favicon.ico"
    ],
    card: "summary_large_image",
    creator: "@bishal",
  },
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

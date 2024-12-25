import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/Scrolling"; 
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "bisxxal",
  description: "portfolio of bishal kandi",
  keywords: "bishal kandi portfolio,bishal portfolio, bishal kandi, bisxxal , bisxxal portfolio", 
  openGraph:{ 
    url: "https://bisxxal.tech",
    title: "bisxxal",
    description: "portfolio of bishal kandi",
    images: [
      "https://bisxxal.vercel.app/favicon.ico"
    ], 
  },
  twitter:{  
    title: "bisxxal",
    description: "portfolio of bishal kandi",
    images: [
      "https://bisxxal.vercel.app/favicon.ico"
    ], 
    card: "summary_large_image",    
    creator: "@bisxxal",
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

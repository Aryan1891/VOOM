'use client';
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/clerk-react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider 
     publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}
     appearance={{
      layout: {
        logoImageUrl: "/icons/yoom-logo.svg",
        socialButtonsVariant: "iconButton",
      },
      
      variables: {
        colorText: '#fff',
        colorPrimary: '#0E78F9',
        colorBackground: '#1c1f2e',
        colorInputBackground: '#252a41',
        colorInputText: '#fff'
      }
    }
    }
    >
    <html lang="en">
      
    <body className={`${inter.className} bg-dark-2`}>{children}
    <Toaster/> 
    </body>
    </html>
    </ClerkProvider>

  );
}

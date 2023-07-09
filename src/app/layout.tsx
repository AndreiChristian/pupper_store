"use client";

import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { DrawerProvider } from "@/contexts/DrawerContext";
import Drawer from "@/components/SideDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <DrawerProvider>
      <html lang="en">
        <body className={`${inter.className} bg-space-darkest`}>
          <Navigation />
          <Drawer></Drawer>

          {children}
          <Footer />
        </body>
      </html>
    </DrawerProvider>
  );
}

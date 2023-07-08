"use client";

import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { DrawerProvider } from "@/contexts/DrawerContext";
import Drawer from "@/components/SideDrawer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <DrawerProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} .dark`}>
          <Navigation />
          <Drawer></Drawer>

          {children}
        </body>
      </html>
    </DrawerProvider>
  );
}

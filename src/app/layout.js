"use client";
import React from "react";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>
          {/* Global Navigation or Header can go here if desired */}
          {children}
          {/* Footer can go here */}
        </AuthProvider>
      </body>
    </html>
  );
}

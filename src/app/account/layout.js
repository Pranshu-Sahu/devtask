"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AccountLayout({ children }) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    // If user is not authenticated, redirect to sign in
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  return (
    <section className="min-h-screen p-4">
      {/* Could have a sidebar or header for account sections here */}
      {children}
    </section>
  );
}

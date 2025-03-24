import React from "react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="space-y-4">
        <Link href="/signup">
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Create Account
          </button>
        </Link>
        <Link href="/signin">
          <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </main>
  );
}

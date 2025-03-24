import React from "react";
import SignUpForm from "@/components/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create your PopX account</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </main>
  );
}

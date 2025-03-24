'use client';

import React from "react";
import { useAuth } from "@/context/AuthContext";
import AccountSettingsForm from "@/components/forms/AccountSettingsForm";

export default function AccountSettingsPage() {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatarUrl || "/default-avatar.png"}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam...
      </p>

      <div className="mt-6">
        <AccountSettingsForm />
      </div>
    </main>
  );
}

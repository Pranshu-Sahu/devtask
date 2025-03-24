"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage or cookie)
    const storedUser = JSON.parse(localStorage.getItem("popx-user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setError("");
      // Mocked fetch to /api/auth/login
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem("popx-user", JSON.stringify(data.user));
      router.push("/account/settings");
    } catch (err) {
      setError(err.message);
    }
  };

  const registerUser = async (formData) => {
    try {
      setError("");
      // Mocked fetch to /api/auth/register
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      const data = await res.json();
      setUser(data.user);
      setIsAuthenticated(true);
      localStorage.setItem("popx-user", JSON.stringify(data.user));
      router.push("/account/settings");
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("popx-user");
    router.push("/welcome");
  };

  const updateUser = async (newData) => {
    // Example: if you want to handle avatar upload, you might use FormData.
    // For simplicity, just mocking a user update here.
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    localStorage.setItem("popx-user", JSON.stringify(updatedUser));
    // Ideally, call an API endpoint to persist changes in DB.
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        login,
        registerUser,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

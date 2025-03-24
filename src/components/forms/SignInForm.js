"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, error } = useAuth();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Email Address"
        name="email"
        type="email"
        register={register}
        errors={errors}
        {...{
          required: "Email is required",
        }}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
        {...{
          required: "Password is required",
        }}
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}

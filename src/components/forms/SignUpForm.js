"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, error } = useAuth();

  const onSubmit = async (data) => {
    await registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Full Name"
        name="fullName"
        register={register}
        errors={errors}
        {...{
          required: "Full name is required",
        }}
      />

      <InputField
        label="Phone Number"
        name="phoneNumber"
        register={register}
        errors={errors}
        {...{
          required: "Phone number is required",
        }}
      />

      <InputField
        label="Email address"
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

      <InputField
        label="Company name"
        name="companyName"
        register={register}
        errors={errors}
      />

      {/* Radio buttons for "Are you an agency?" */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-1">
          Are you an agency?
        </p>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="yes"
              {...register("isAgency")}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="no"
              {...register("isAgency")}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  );
}

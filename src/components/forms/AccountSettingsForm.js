"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

export default function AccountSettingsForm() {
  const { user, updateUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      companyName: user.companyName,
    },
  });

  const onSubmit = async (data) => {
    await updateUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Full Name"
        name="fullName"
        register={register}
        errors={errors}
      />
      <InputField
        label="Phone Number"
        name="phoneNumber"
        register={register}
        errors={errors}
      />
      <InputField
        label="Company Name"
        name="companyName"
        register={register}
        errors={errors}
      />

      {/* File input for avatar */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profile Photo
        </label>
        <input
          type="file"
          {...register("avatar")}
          className="block w-full text-sm text-gray-700"
        />
      </div>

      <Button type="submit" className="w-full">
        Save Settings
      </Button>
    </form>
  );
}

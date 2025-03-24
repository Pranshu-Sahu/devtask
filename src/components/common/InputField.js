import React from "react";

export default function InputField({
  label,
  type = "text",
  name,
  register,
  errors,
  ...rest
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        {...rest}
        className="mt-1 block w-full p-2 border border-gray-300 rounded"
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

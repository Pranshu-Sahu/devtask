import React from "react";

export default function Avatar({ src, alt, className }) {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt={alt}
      className={`rounded-full ${className}`}
    />
  );
}

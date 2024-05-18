// components/ui/input.tsx
import React from "react";

export const Input = ({ id, name, type, value, onChange, required }: {
  id: string,
  name: string,
  type: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean
}) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    className="px-3 py-2 border rounded w-full"
  />
);

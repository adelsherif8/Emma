// components/ui/textarea.tsx
import React from "react";


export const Textarea = ({ id, name, value, onChange, required }: {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  required?: boolean
}) => (
  
  <textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    required={required}
    className="px-3 py-2 border-black rounded w-full"
  />
);

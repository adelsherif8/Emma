// components/ui/button.tsx
import React from "react";

export const Button = ({ children, type = "button" }: { children: React.ReactNode, type?: "button" | "submit" }) => (
  <button type={type} className="p-2 rounded-lg text-sm md:text-2xl transition duration-300 buttonHead fonthead self-center">
    {children}
  </button>
);

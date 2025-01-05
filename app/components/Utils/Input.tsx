"use client";
import React from "react";

const Input = ({ children, type }: { children: React.ReactNode; type: string }) => {
  return (
    <div>
      <label>{children}</label>
      <input type={type} />
    </div>
  );
};

export default Input;

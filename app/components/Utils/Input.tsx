"use client";
import React from "react";

const Input = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <div className="flex flex-col justify-center p-3">
      <label>{children}</label>
      <input
        type={type}
        className="border-sky-900 border-2 rounded-xl my-3 text-center"
      />
    </div>
  );
};

export default Input;

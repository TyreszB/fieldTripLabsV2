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
    <div className="flex flex-col p-5">
      <label>{children}</label>
      <input
        type={type}
        className="border-sky-900 border-2 rounded-xl my-3 text-center px-2"
      />
    </div>
  );
};

export default Input;

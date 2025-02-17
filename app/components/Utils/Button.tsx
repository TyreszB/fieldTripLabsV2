"use client";

import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className=" bg-sky-600 rounded-md text-white px-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

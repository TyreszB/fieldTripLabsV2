"use client";
import React from "react";

const Input = ({ children, type }) => {
  return (
    <div>
      <label>{children}</label>
      <input type={type} />
    </div>
  );
};

export default Input;

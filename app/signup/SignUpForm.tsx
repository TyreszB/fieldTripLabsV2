"use client";
import React from "react";
import Button from "../components/Utils/Button";
import Input from "../components/Utils/Input";

const SignUpForm = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <Input type={"text"}>Name</Input>
      <Button onClick={handleSubmit}>Sign Up</Button>
    </div>
  );
};

export default SignUpForm;

import React from "react";
import Input from "../components/Utils/Input";

const page = () => {
  return (
    <div className="relative flex-col justify-center items-center w-[80vh] ">
      <Input type="text">Itinerary Name</Input>
      <Input type="date">Date</Input>
    </div>
  );
};

export default page;

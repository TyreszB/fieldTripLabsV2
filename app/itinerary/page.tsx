import React from "react";
import Input from "../components/Utils/Input";
import ItineraryList from "../components/Utils/ItineraryList";

const page = () => {
  return (
    <div className="relative flex justify-center w-screen">
      <div className="flex">
        <Input type="text">Itinerary Name</Input>
        <Input type="date">Date</Input>
      </div>
      <div className="flex-grow">
        <ItineraryList />
      </div>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import Button from "./Button";

const ItineraryList = () => {
  interface Item {
    name: string;
  }

  const [list, setList] = React.useState<Item[]>([]);

  const handleAddItem = () => {
    // need to open a modal to add item
  };

  return (
    <div className=" flex justify-center shadow-xl rounded-lg w-[500px] h-[700px] m-10">
      <div>What To Bring....</div>
      <ul>
        {list.map((item) => (
          <li key={item.name}> {item.name}</li>
        ))}
      </ul>
      <div className="flex justify-end items-end mb-2">
        <Button onClick={handleAddItem}>+</Button>
      </div>
    </div>
  );
};

export default ItineraryList;

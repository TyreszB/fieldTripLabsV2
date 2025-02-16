"use client";
import React from "react";

const ItineraryList = () => {
  interface Item {
    name: string;
  }

  const [list, setList] = React.useState<Item[]>([]);

  return (
    <div className=" flex justify-center shadow-xl rounded-lg w-[500px] h-[700px] m-10">
      <div>What To Bring....</div>
      {list.map((item) => (
        <li key={item.name}> {item.name}</li>
      ))}
    </div>
  );
};

export default ItineraryList;

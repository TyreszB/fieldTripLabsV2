"use client";
import React from "react";
import Button from "./Button";

const ItineraryList = () => {
  interface Item {
    name: string;
  }

  const [list, setList] = React.useState<Item[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleAddItem = () => {
    setList([...list, { name: inputValue }]);
  };

  return (
    <div className=" flex justify-center shadow-xl rounded-lg w-[500px] h-[700px] m-10">
      <div>What To Bring....</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
          setInputValue("");
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Item"
          className="rounded-xl border-2 pl-2"
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>

      <ul>
        {list.map((item) => (
          <li key={item.name}> {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryList;

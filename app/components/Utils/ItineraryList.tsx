"use client";
import React from "react";
import Button from "./Button";
import { Cancel } from "@mui/icons-material";
import capitalize from "@/app/Util/capitalize";

const ItineraryList = () => {
  interface Item {
    name: string;
  }

  const [list, setList] = React.useState<Item[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleAddItem = () => {
    setList([...list, { name: inputValue }]);
  };

  const handleDeleteItem = (item: Item) => {
    setList(list.filter((listItem) => item != listItem));
  };

  return (
    <div className=" flex flex-col items-center shadow-xl rounded-lg w-[500px] h-[700px] m-10">
      <div className="py-3">What To Bring....</div>
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
          <li
            className="flex bg-sky-700 text-white rounded-2xl px-2 py-1 text-center my-3"
            key={item.name}
          >
            {capitalize(item.name)}
            <button className=" ml-2" onClick={() => handleDeleteItem(item)}>
              <Cancel />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryList;

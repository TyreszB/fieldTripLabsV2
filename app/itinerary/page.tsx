import React from "react";
import Input from "../components/Utils/Input";
import ItineraryList from "../components/Utils/ItineraryList";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
type Library = "places";

const libraries: Library[] = ["places"];

const Page = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? "",
    libraries,
  });

  return (
    <div className="relative flex justify-center w-screen bg-sky-50">
      <div className="flex flex-grow justify-center">
        <Input type="text">Itinerary Name</Input>
        <Input type="date">Date</Input>
        <div>
          {isLoaded && (
            <Autocomplete>
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-50 flex justify-center w-full px-4">
                <input
                  type="text"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  placeholder="Search Your Dream Vacation..."
                  className="text-[30px] text-center border border-sky-200 rounded-3xl shadow-xl w-[500px] z-50"
                  // onClick={() => setValue("")}
                />
              </div>
            </Autocomplete>
          )}
        </div>
      </div>
      <div className=" flex justify-end">
        <ItineraryList />
      </div>
    </div>
  );
};

export default Page;

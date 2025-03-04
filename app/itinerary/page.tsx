"use client";
import React, { useState, useRef } from "react";
import Input from "../components/Utils/Input";
import ItineraryList from "../components/Utils/ItineraryList";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

type GeoPosition = {
  lat: number;
  lng: number;
};

type Library = "places";

const libraries: Library[] = ["places"];

const Page = () => {
  const [value, setValue] = useState<string>("");
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? "",
    libraries,
  });

  const fetchAttractions = () => {
    if (!autocompleteRef) return;

    const place = autocompleteRef.current?.getPlace();

    if (!place) return;

    const geoLoc: GeoPosition = {
      lat: place.geometry?.location?.lat() ?? 0,
      lng: place.geometry?.location?.lng() ?? 0,
    };

    console.log(geoLoc);
  };

  return (
    <div className="relative flex justify-around w-screen bg-sky-50">
      <div className="relative flex flex-col">
        <div className="flex justify-center mt-10">
          <Input type="text">Itinerary Name</Input>
          <Input type="date">Date</Input>
        </div>
        <div>
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={fetchAttractions}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search Your Dream Vacation..."
              className="text-[30px] text-center border-2 border-sky-900 rounded-2xl shadow-xl w-[500px] z-50"
              onClick={() => setValue("")}
            />
          </Autocomplete>
        </div>
      </div>
      <div className="flex justify-end">
        <ItineraryList />
      </div>
    </div>
  );
};

export default Page;

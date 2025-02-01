"use client";
import React, { useState, useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

type Library = "places";

const libraries: Library[] = ["places"];

const PlacesAutocomplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? "",
    libraries,
  });

  const [value, setValue] = useState<string>("");

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      console.log(place);
      // after you seach the map should update to the new place
    }
  };

  if (!isLoaded) return;

  return (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Your Dream Vacation..."
        className="text-[30px] text-center border border-sky-200 rounded-3xl shadow-xl w-[500px]"
      />
    </Autocomplete>
  );
};

export default PlacesAutocomplete;

"use client";
import React, { useState, useRef } from "react";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

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

      // console.log(place);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your address"
      />
    </Autocomplete>
  );
};

export default PlacesAutocomplete;

"use client";
require("dotenv").config({ path: "./.env" });
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const PlacesAutocomplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_PLACES_API_KEY,
    libraries,
  });

  const [value, setValue] = useState("");
  const autocompleteRef = useRef(null);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      console.log(place);
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

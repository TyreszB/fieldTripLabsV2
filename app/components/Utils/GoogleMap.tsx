"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Image from "next/legacy/image";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../public/Logo.png";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

interface GeoPosition {
  lat: number;
  lng: number;
}
type Library = "places";

const libraries: Library[] = ["places"];

const getGeoPosition = (): Promise<GeoPosition> => {
  let userConfirmed: any = confirm(
    "Would you like to share your current location?"
  );
  if (userConfirmed) {
    return new Promise<GeoPosition>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          resolve({ lat: 35.652832, lng: 139.839478 });
        }
      );
    });
  } else {
    return Promise.resolve({ lat: 35.652832, lng: 139.839478 });
  }
};

function GoogleMap() {
  const [finalPos, setFinalPos] = useState<GeoPosition | null>(null);
  const [photos, setPhotos] = useState<string[] | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getGeoPosition().then((pos) => setFinalPos(pos));
  }, []);

  useEffect(() => {
    if (finalPos) {
      const url = `api/nearbySearch?lat=${finalPos.lat}&lng=${
        finalPos.lng
      }&radius=${50000}&type=tourist_attraction`;

      const fetchData = async () => {
        try {
          const response = await fetch(url, { method: "GET" });
          const data = await response.json();

          setPhotos(data.map((place: any) => place.photoUrl));
        } catch (err) {
          console.error("Error during API call:", err);
        }
      };

      fetchData();
    }
  }, [finalPos]);

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      console.log(place);
      // after you seach the map should update to the new place
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? "",
    libraries,
  });

  if (!finalPos || !isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image
          src={Logo}
          className=" animate-pulse"
          alt="Logo"
          priority={true}
        />
      </div>
    );
  }

  return (
    <>
      <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={onPlaceChanged}
      >
        <div className="flex justify-around absolute mt-[100px] w-max">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Your Dream Vacation..."
            className="text-[30px] text-center border border-sky-200 rounded-3xl shadow-xl w-[500px] z-50"
          />
        </div>
      </Autocomplete>
      <div className="flex justify-around">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? ""}
        >
          <div className="relative flex justify-center h-[80vh] w-[60vw] mt-[50px]">
            <Map
              zoom={10}
              defaultCenter={finalPos || { lat: 35.652832, lng: 139.839478 }}
              disableDefaultUI
            ></Map>

            <div className="absolute top-0 left-0 w-full h-full flex items-end pointer-events-none">
              <div className="overflow-hidden w-full inline-flex flex-nowrap ">
                <ul className="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pb-5">
                  {photos?.map((photo) => (
                    <li key={`${photo} 1`} className="h-[100px] w-[180px]">
                      <Image
                        alt="photo"
                        height={100}
                        width={180}
                        src={photo}
                        className="rounded-md px-2"
                        priority={true}
                      />
                    </li>
                  ))}
                </ul>
                <ul className="relative flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pb-5">
                  {photos?.map((photo) => (
                    <li key={`${photo} 2`} className="h-[100px] w-[180px]">
                      <Image
                        alt="photo"
                        height={100}
                        width={180}
                        src={photo}
                        className="rounded-md px-2 "
                        priority={true}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </APIProvider>
      </div>
    </>
  );
}

export default GoogleMap;

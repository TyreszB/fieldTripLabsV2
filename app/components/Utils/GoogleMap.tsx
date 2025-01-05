"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";

interface GeoPosition {
  lat: number;
  lng: number;
}

const types: string[] = [
  "resturant",
  "art_gallery",
  "art_studio",
  "amusement_park",
  "aquarium",
  "botanical_garden",
  "cultural_landmark",
  "historical_place",
  "monument",
  "museum",
  "national_park",
  "observation_deck",
  "park",
  "performing_arts_theater",
  "sculpture",
  "tourist_attraction",
  "zoo",
  "wildlife_park",
  "wildlife_refuge",
  "amphitheatre",
  "adventure_sports_center",
  "hiking_area",
  "beach",
  "cycling_park",
  "roller_coaster",
  "skateboard_park",
  "state_park",
  "ferris_wheel",
  "plaza",
  "planetarium",
  "picnic_ground",
  "event_venue",
  "visitor_center",
  "concert_hall",
  "opera_house",
];

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

  useEffect(() => {
    getGeoPosition().then((pos) => setFinalPos(pos));
  }, []);

  useEffect(() => {
    if (finalPos) {
      const typeQuery = types.join(",");
      const url = `api/nearbySearch?lat=${finalPos.lat}&lng=${
        finalPos.lng
      }&type=${typeQuery}&radius=${500}`;

      const fetchData = async () => {
        try {
          const response = await fetch(url, { method: "GET" });
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error("Error during API call:", err);
        }
      };

      fetchData();
    }
  }, [finalPos]);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? ""}>
      <div className="h-[500px] w-[500px]">
        <Map zoom={9} center={finalPos}></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;

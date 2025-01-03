"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";

interface GeoPosition {
  lat: number;
  lng: number;
}

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
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ?? ""}>
      <div className="h-[500px] w-[500px]">
        <Map zoom={9} center={finalPos}></Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;

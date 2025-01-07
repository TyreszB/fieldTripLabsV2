import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

interface Result {
  name: string;
  place_id: string;
  photos?: { photo_reference: string }[];
  photo_reference: string | null;
  geometry: { location: { lat: number; lng: number } };
  types: string[];
  photoUrl: string;
}

const types: string[] = ["museum", "park", "zoo", "tourist_attraction"];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const radius = searchParams.get("radius");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  const placeData = [];

  for (const type of types) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;
    console.log(url);

    const res = await fetch(url);
    const data: any = await res.json();

    placeData.push(...data.results);
  }

  try {
    const results: Result[] = await Promise.all(
      placeData.map(async (place: Result) => {
        const getPhotoUrl = await fetch(
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos?.[0]?.photo_reference}&key=${apiKey}`
        );

        return {
          name: place.name,
          place_id: place.place_id,
          photo_reference: place.photos?.[0]?.photo_reference ?? null,
          geometry: {
            location: {
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            },
          },
          types: place.types,
          photoUrl: getPhotoUrl.url,
        };
      })
    );

    return NextResponse.json(results.splice(0, 20));
  } catch (error) {
    console.error("Error fetching data from Places API:", error);
    return;
  }
}

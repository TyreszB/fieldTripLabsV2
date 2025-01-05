import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

interface Result {
  name: string;
  place_id: string;
  photos?: { photo_reference: string }[];
  photo_reference: string;
  geometry: { location: { lat: number; lng: number } };
  types: string[];
  photoUrl: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const type = searchParams.get("type");
  const radius = searchParams.get("radius");

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const res = await fetch(url);

    const data: any = await res.json();

    // Need filter results to find the attractions and need to add error handling

    const results: Result[] = await Promise.all(
      data.results.map(async (place: Result) => {
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

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching data from Places API:", error);
    return;
  }
}

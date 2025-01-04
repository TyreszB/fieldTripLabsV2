interface GeoPosition {
  lat: number;
  lng: number;
}

const nearbySearch = async (cordinartes: GeoPosition) => {
  const { Place, SearchNearbyRankPreference } =
    (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;

  const types = [
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

  const request: google.maps.places.SearchNearbyRequest = {
    fields: ["displayName", "location"],
    locationRestriction: {
      center: cordinartes,
      radius: 500,
    },
    includedPrimaryTypes: types,
    maxResultCount: 10,
    rankPreference: SearchNearbyRankPreference.POPULARITY,
    language: "en-US",
    region: "us",
  };

  const { places } = await Place.searchNearby(request);

  if (places.length) {
    console.log(places);
  } else {
    console.log("no result");
  }

  if (places.length) {
    console.log(places);
  } else {
    console.log("no result");
  }
};

export default nearbySearch;

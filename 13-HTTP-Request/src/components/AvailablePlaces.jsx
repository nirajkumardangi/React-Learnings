import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlace = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlace);
          setIsFetching(false);
        });
      } catch (error) {
        setErrorMsg({
          message:
            error.message || "Could not fetch data, please try again later",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (errorMsg) {
    return <Error title="An error occurred" message={errorMsg.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places found"
      onSelectPlace={onSelectPlace}
    />
  );
}

import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/placesddd");
        const resData = await response.json();
        setAvailablePlaces(resData.places);

        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
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

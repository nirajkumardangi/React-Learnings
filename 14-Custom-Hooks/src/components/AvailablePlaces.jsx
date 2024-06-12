import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hook/useFetch.js";

// navigator.geolocation.getCurrentPosition((position) => {
//         const sortedPlaces = sortPlacesByDistance(
//           places,
//           position.coords.latitude,
//           position.coords.longitude
//         );
//         setAvailablePlaces(sortedPlaces);
//         setIsFetching(false);
//       });

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
    error,
  } = useFetch(fetchAvailablePlaces, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

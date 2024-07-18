import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

// define router loader function
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //...
  } else {
    // const resData = await response.json();
    // return resData.events;

    return response; // because loader fn automatically resolve <promises>
  }
}

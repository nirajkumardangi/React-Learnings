import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetched events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// define router loader() function which only contain js code or browser API's, not react because it execute on the browser.
export async function loader() {
  return defer({
    events: loadEvents(),
  });
}

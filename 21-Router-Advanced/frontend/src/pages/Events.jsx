import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export default function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  const events = data.events;

  return <EventsList events={events} />;
}

// define router loader() function which only contain js code or browser API's, not react because it execute on the browser.
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };

    // throw new Response(
    //   JSON.stringify({ message: "Could not fetched events." }),
    //   { status: 500 }
    // );

    throw json({ message: "Could not fetched events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;

    return response; // because loader fn automatically resolve <promises>
  }
}

import EventCard from "../EventCard/EventCard";
import Axios from "axios";
import "./eventsparent.css";
export default function EventsParent() {
  // const getData = async () => {
  //   const res = await Axios(
  //     "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=20"
  //   );
  //   return await res.json();
  // };
  return (
    <div className="events-parent-container">
      <p className="text-250-events-parent">250+ Events</p>
      <div>
        <EventCard />
      </div>
    </div>
  );
}

import EventCard from "../EventCard/EventCard";
import "./eventsparent.css";
export default function EventsParent() {
  return (
    <div className="events-parent-container">
      <p className="text-250-events-parent">250+ Events</p>
      <div>
        <EventCard />
      </div>
    </div>
  );
}

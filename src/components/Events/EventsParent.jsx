import EventCard from "../EventCard/EventCard";
import "./eventsparent.css";
export default function EventsParent({ data }) {
  console.log(data, "data in event parents");
  return (
    <div className="events-parent-container">
      <p className="text-250-events-parent">
        {data.events ? data.events.length : "0"} Events
      </p>
      <div className="list-of-events-container">
        {data.events ? (
          data.events.map((element) => {
            return (
              <div>
                <EventCard data={element} />
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>No Data Available</p>
        )}
      </div>
    </div>
  );
}

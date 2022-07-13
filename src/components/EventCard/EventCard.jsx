import InfoIcon from "../../svg/infoIcon";
import PodiumIcon from "../../svg/podiumIcon";
import "./eventcard.css";

export default function EventCard({ data }) {
  return (
    <div>
      <div className="event-card-parent">
        <div className="event-card-background-image"></div>
        <div className="title-venue-free-container">
          <p className="event-title">{data.name}</p>
          <div className="event-venue-free-container">
            <div className="event-venue-podium-icon-container">
              <span>
                <PodiumIcon />
              </span>
              <span className="event-venue">Raddison Blue</span>
            </div>
            <div className="event-free-info-icon-container">
              <span>
                <InfoIcon />
              </span>
              <span className="event-free">
                {data.is_free ? "Free" : "Paid"} |{" "}
                {data.is_virtual ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// is_free: false
// is_future: true
// is_live: false
// is_past: false
// is_running: false
// is_virtual: false

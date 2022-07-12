import InfoIcon from "../../svg/infoIcon";
import PodiumIcon from "../../svg/podiumIcon";
import "./eventcard.css";
// import EventCardBackgroundImage from "../../img/seatsTheatre.jpg";

export default function EventCard() {
  return (
    <div>
      <div className="event-card-parent">
        <div className="event-card-background-image"></div>
        <div className="title-venue-free-container">
          <p className="event-title">
            Annual International Conference On Data Science
          </p>
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
              <span className="event-free">Free | Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Logo from "../../svg/logo";
import ProfileIcon from "../../svg/profileIcon";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-parent-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="events-resources-pricing-container">
        <span className="events-resources-pricing">Events</span>
        <span className="events-resources-pricing">Resources</span>
        <span className="events-resources-pricing">Pricing</span>
        <button className="host-event-button-navbar"> Host Event</button>
        <ProfileIcon />
      </div>
      <div></div>
    </div>
  );
}

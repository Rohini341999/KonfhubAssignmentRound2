import FrontCard from "./components/FrontCard/FrontCard";
import Navbar from "./components/Navbar/Navbar";
import EventsParent from "./components/Events/EventsParent";
import "./App.css";

export default function ContainerPage() {
  return (
    <div className="container">
      <Navbar />
      <FrontCard />
      <EventsParent />
    </div>
  );
}

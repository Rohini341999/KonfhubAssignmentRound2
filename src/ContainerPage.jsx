import FrontCard from "./components/FrontCard/FrontCard";
import Navbar from "./components/Navbar/Navbar";
import EventsParent from "./components/Events/EventsParent";
import "./App.css";
import LoadMore from "./components/LoadMore/LoadMore";
import { useState, useEffect } from "react";

export default function ContainerPage() {
  const [value, setValue] = useState();
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchClick = () => {
    fetch(
      `https://manage-api.konfhub.com/hosted-events?limit=20&search_query=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setValue(data));
  };

  const onTrue = () => {
    const trueName = document.getElementsByName("true")[0].name;
    fetch(
      `https://manage-api.konfhub.com/hosted-events?limit=20&past_events=${trueName}`
    )
      .then((res) => res.json())
      .then((data) => setValue(data));
    console.log(value, "onTrue");
  };

  const onFalse = () => {
    const falseName = document.getElementsByName("false")[0].name;
    fetch(
      `https://manage-api.konfhub.com/hosted-events?limit=20&past_events=${falseName}`
    )
      .then((res) => res.json())
      .then((data) => setValue(data));
  };

  const getData = () => {
    fetch(`https://manage-api.konfhub.com/hosted-events?limit=20`)
      .then((res) => res.json())
      .then((data) => setValue(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <FrontCard
        onSearchClick={onSearchClick}
        onSearchChange={onSearchChange}
        onTrue={onTrue}
        onFalse={onFalse}
      />
      <EventsParent data={value ? value : [{ message: "oops" }]} />
      <LoadMore />
    </div>
  );
}

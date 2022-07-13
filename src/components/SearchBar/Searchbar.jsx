import bootstrap from "bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import SearchIconBackground from "../../svg/searchIconBackground";
import DownArrowDropdownIcon from "../../svg/downArrowDropdownIcon";
import "./searchbar.css";
import { useState, useEffect } from "react";
import Axios from "axios";
export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  console.log(searchText, "searchText");

  const onSearchClick = async () => {
    // const res = await Axios(
    //   `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=20&search_query=${searchText}`
    // );
    // return await res.json();
  };

  const getData = async () => {
    // const res = await Axios(
    //   `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=20&past_events=${dropdownValue}`
    // );
    // return await res.json();
  };
  useEffect(() => {
    getData();
  }, [dropdownValue]);

  const onTrue = (e) => {
    const trueName = document.getElementsByName("true")[0].name;
    setDropdownValue(trueName);
  };

  const onFalse = (e) => {
    const falseName = document.getElementsByName("false")[0].name;
    setDropdownValue(falseName);
  };

  return (
    <div className="search-past-events-container">
      <div className="search-container">
        <span className="search-title">Search</span>

        <input
          className="input-tag"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <SearchIconBackground onClick={onSearchClick} />
      </div>
      <div className="dropdown-container">
        <span className="dropdown-title">Past Events</span>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Type
          </button>
          <span className="down-arrow-dropdown-icon-container">
            <DownArrowDropdownIcon />
          </span>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-li">
              <button class="dropdown-item" name="true" onClick={onTrue}>
                True
              </button>
            </li>
            <li className="dropdown-li">
              <button class="dropdown-item" name="false" onClick={onFalse}>
                False
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

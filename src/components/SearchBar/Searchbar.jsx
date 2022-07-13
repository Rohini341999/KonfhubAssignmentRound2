import bootstrap from "bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import SearchIconBackground from "../../svg/searchIconBackground";
import DownArrowDropdownIcon from "../../svg/downArrowDropdownIcon";
import "./searchbar.css";
export default function SearchBar({
  onSearchClick,
  onSearchChange,
  onTrue,
  onFalse,
}) {
  return (
    <div className="search-past-events-container">
      <div className="search-container">
        <span className="search-title">Search</span>

        <input
          className="input-tag"
          type="text"
          onChange={onSearchChange}
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

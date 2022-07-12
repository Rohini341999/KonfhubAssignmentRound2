import SearchIconBackground from "../../svg/searchIconBackground";
import "./searchbar.css";
export default function SearchBar() {
  return (
    <div className="search-past-events-container">
      <div className="search-container">
        <span className="search-title">Search</span>

        <input className="input-tag" type="text"></input>
        <SearchIconBackground />
      </div>
      <div className="dropdown-container">
        <span className="dropdown-title">Past Events</span>
        <select name="past-events" className="dropdown-select-past-events">
          <option className="dropdown-option">True</option>
          <option className="dropdown-option">False</option>
        </select>
      </div>
    </div>
  );
}

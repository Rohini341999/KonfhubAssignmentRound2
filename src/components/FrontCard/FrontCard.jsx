import OctopusIcon from "../../svg/octopusIcon";
import SearchBar from "../SearchBar/Searchbar";
import "./frontcard.css";
export default function FrontCard({
  onSearchClick,
  onSearchChange,
  onTrue,
  onFalse,
}) {
  return (
    <div className="front-card-parent-container">
      <div className="title-info-container">
        <span className="title-front-card">Events</span>
        <p className="info-front-card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
      </div>
      <div className="octopus-container-front-card">
        <OctopusIcon />
      </div>
      <SearchBar
        onSearchClick={onSearchClick}
        onSearchChange={onSearchChange}
        onTrue={onTrue}
        onFalse={onFalse}
      />
    </div>
  );
}

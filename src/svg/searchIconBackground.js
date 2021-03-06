import "../components/SearchBar/searchbar.css";
export default function SearchIconBackground(props) {
  return (
    <button className="search-icon" onClick={props.onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#572148" />
        <mask
          id="mask0_99_120"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="6"
          width="11"
          height="11"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.97778 6.99341H16.7798V16.7955H6.97778V6.99341Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_99_120)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8788 7.74845C9.59246 7.74845 7.73239 9.60801 7.73239 11.8943C7.73239 14.1807 9.59246 16.0407 11.8788 16.0407C14.1646 16.0407 16.0247 14.1807 16.0247 11.8943C16.0247 9.60801 14.1646 7.74845 11.8788 7.74845ZM11.8791 16.7955C9.17655 16.7955 6.97778 14.5967 6.97778 11.8942C6.97778 9.19167 9.17655 6.99341 11.8791 6.99341C14.5816 6.99341 16.7799 9.19167 16.7799 11.8942C16.7799 14.5967 14.5816 16.7955 11.8791 16.7955Z"
            fill="white"
          />
        </g>
        <mask
          id="mask1_99_120"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="14"
          y="14"
          width="4"
          height="4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6473 14.8983H17.1758V17.4221H14.6473V14.8983Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_99_120)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1511 17.338C17.055 17.338 16.9583 17.3013 16.8843 17.2278L15.1108 15.4593C14.9634 15.3119 14.9629 15.0728 15.1103 14.9254C15.2573 14.7769 15.4963 14.7779 15.6443 14.9244L17.4178 16.6933C17.5653 16.8408 17.5658 17.0793 17.4183 17.2268C17.3448 17.3013 17.2477 17.338 17.1511 17.338Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  );
}

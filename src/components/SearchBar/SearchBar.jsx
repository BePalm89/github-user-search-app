import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(userName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar-container">
        <div>
          <img
            src="/assets/icon-search.svg"
            alt="icon-search"
            className="icon-search"
          ></img>
          <input
            className="input-search"
            placeholder="Search GitHub Username..."
            name="userName"
            value={userName}
            onChange={handleChange}
          ></input>
        </div>
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

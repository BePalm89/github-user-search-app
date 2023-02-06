import { useState } from "react";
import styled from "@emotion/styled";

const SearchBarContainer = styled.div({
  backgroundColor: "var(--colors-background-light)",
  padding: "16px",
  borderRadius: "4px",
  boxShadow: "1px 4px #66000000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

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
      <SearchBarContainer>
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
      </SearchBarContainer>
    </form>
  );
};

export default SearchBar;

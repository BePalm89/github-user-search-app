import "./SearchBar.css";

const SearchBar = () => {
  return (
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
        ></input>
      </div>
      <button className="search-btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

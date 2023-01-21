import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form>
        <ul className="menu-search-bar">
          <div className="item-search-bar">
            <li>
              <img
                src="/assets/icon-search.svg"
                alt="icon-search"
                className="icon-search"
              ></img>
              <input className="input-search"></input>
            </li>
          </div>

          <li>
            <button className="search-btn">Search</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchBar;

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form>
        <ul className="menu">
          <li className="item">
            <img src="/assets/icon-search.svg" alt="icon-search"></img>
            <input></input>
          </li>
          <li>
            <butto>Search</butto>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SearchBar;

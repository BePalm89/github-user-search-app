import Navbar from "../navbar/Navbar";
import SearchBar from "../search-bar/SearchBar";
import UserDatails from "../user-details/UserDetails";
import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <SearchBar />
      <UserDatails />
    </div>
  );
};

export default Container;

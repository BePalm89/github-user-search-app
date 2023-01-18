import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import UserDatails from "../UserDetails/UserDetails";
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

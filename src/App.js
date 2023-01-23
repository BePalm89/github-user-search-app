import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDatails from "./components/UserDetails/UserDetails";

import "./App.css";

function App() {
  return (
    <Container>
      <Navbar />
      <SearchBar />
      <UserDatails />
    </Container>
  );
}

export default App;

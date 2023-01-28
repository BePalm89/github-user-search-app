import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDatails from "./components/UserDetails/UserDetails";
import { useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState({});

  function handleOnSubmit(userName) {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }

  return (
    <Container>
      <div className="container-box">
        <Navbar />
        <SearchBar onSubmit={handleOnSubmit} />
        <UserDatails user={user} />
      </div>
    </Container>
  );
}

export default App;

import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDatails from "./components/UserDetails/UserDetails";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});

  function handleOnSubmit(userName) {
    setUserName(userName);
  }

  useEffect(() => {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
    /*     return () => {
      cleanup
    };  */
  }, [userName]);

  return (
    <Container>
      <main className="container-box">
        <Navbar />
        <SearchBar onSubmit={handleOnSubmit} />
        <UserDatails user={user} />
      </main>
    </Container>
  );
}

export default App;

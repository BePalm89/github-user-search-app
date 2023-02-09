import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDetails from "./components/UserDetails/UserDetails";
import ErrorFallback from "./components/ErrorBoundary/ErrorBoundary.jsx";
import { useState, useEffect } from "react";

import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

//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 -> github token

function App() {
  const INITIAL_USER_NAME = "BePalm89";
  const [user, setUser] = useState({});
  const [noResult, setResult] = useState("");

  function handleOnSubmit(userName) {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setResult("No results");
          } else {
            setResult("");
            setUser(data);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${INITIAL_USER_NAME}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Container>
        <main className="container-box">
          <Navbar />
          <SearchBar noResult={noResult} onSubmit={handleOnSubmit} />
          <UserDetails user={user} />
        </main>
      </Container>
    </ErrorBoundary>
  );
}

export default App;

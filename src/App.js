import "./App.css";
import logo from "./dictionary-image.png";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span>
            <img src={logo} className="logo" alt="logo" />
          </span>
          <span>
            <h1>Dictionary</h1>
          </span>
        </header>
        <p>Want to find a definition? Use our Dictionary tool to help!</p>
        <Search />
      </div>
      <p>
        coded by <a href="https://github.com/BethJW">Beth Williamson</a> and
        open-source on{" "}
        <a href="https://github.com/BethJW/dictionary-app">Github</a>
      </p>
    </div>
  );
}

export default App;

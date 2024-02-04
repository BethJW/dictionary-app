import "./App.css";
import logo from "./dictionary-image.png";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img src={logo} className="logo" alt="logo" />
        </span>
        <span>
          <h1>Dictionary</h1>{" "}
        </span>
      </header>
    </div>
  );
}

export default App;

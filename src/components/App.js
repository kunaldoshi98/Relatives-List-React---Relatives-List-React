import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["Relative1", "Relative2", "Relative3"];
    return (
      <>
        <ol>
          {relatives.map((city, index) => (
            <li key={`location${index + 1}`}>{relatives}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;

import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  render() {
    const relatives = [
      "relativeListItem1",
      "relativeListItem2",
      "relativeListItem3"
    ];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={`location${relative}`}>{relatives}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;

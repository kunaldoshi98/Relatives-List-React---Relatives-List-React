import React, { Component, useState } from "react";
import "../styles/App.css";
import ListItem from "@material-ui/core/ListItem";
class App extends Component {
  render() {
    const relatives = ["Relative1", "Relative2", "Relative3"];
    return (
      <>
        <ol key="RelativeName">
          {relatives.map((relativeName, index) => (
            <ListItem key={`relatives${index + 1}`}>{relatives}</ListItem>
          ))}
        </ol>
      </>
    );
  }
}

export default App;

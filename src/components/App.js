import React, { Component, useState } from "react";
import "../styles/App.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
          {relatives.map((relativeName, index) => (
            <ListItem key={`relatives-${index + 1}`}>
              <ListItemText primary={`Item ${relatives}`} />
            </ListItem>
          ))}
        </ol>
      </>
    );
  }
}

export default App;

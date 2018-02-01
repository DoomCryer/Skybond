import React, { Component } from "react";
import LineChart from "../LineChart";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">NII CAPITAL CORP</div>
        <LineChart bondId={123} date="02-02-2017" />
      </div>
    );
  }
}

export default App;

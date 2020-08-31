import React, { Component } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Featured from "./components/Featured";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header  className='header'/>
        <Featured/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./styles/App.css";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header  className='header'/>
      </div>
    );
  }
}

export default App;

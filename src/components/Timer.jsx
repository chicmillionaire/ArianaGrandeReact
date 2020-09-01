import React, { Component } from "react";

import "../styles/Timer.css";

class Timer extends Component {
  state = {};
  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">Event Starts In</div>

        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time"> 23</div>
            <div className="countdown_tag">Days</div>
            <div className="countdown_time"> 2</div>
            <div className="countdown_tag">hs</div>
            <div className="countdown_time"> 20</div>
            <div className='countdown_tag'>Mins</div>
            <div className="countdown_time"> 40</div>
            <div className='countdown_tag'>Secs</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

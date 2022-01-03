import React, { useState } from "react";
import axios from "axios";

export default function BottomRight() {
  let [forecast, setForecast] = useState("null");
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  //let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=9a3b65ea12488fdd227f03eda47a0bf6&units=metric`;
  //axios.get(apiUrl).then(displayForecast);

  return (
    <div className="BottomRight">
      <div class="card cardDay">
        <div class="card-body">
          <i class="far fa-sun sunSmall"></i>
          <h3>31°C</h3>
          <h4 id="day-two">Monday</h4>
        </div>
      </div>
      <div class="card cardDay">
        <div class="card-body">
          <i class="far fa-sun sunSmall"></i>
          <h3>31°C</h3>
          <h4 id="day-three">Tuesday</h4>
        </div>
      </div>
      <div class="card cardDay">
        <div class="card-body">
          <i class="far fa-sun sunSmall"></i>
          <h3>33°C</h3>
          <h4 id="day-four">Wednesday</h4>
        </div>
      </div>
      <div class="card cardDay">
        <div class="card-body">
          <i class="far fa-sun sunSmall"></i>
          <h3>33°C</h3>
          <h4 id="day-five">Thursday</h4>
        </div>
      </div>
      <div class="card cardDay">
        <div class="card-body">
          <i class="far fa-sun sunSmall"></i>
          <h3>33°C</h3>
          <h4 id="day-six">Friday</h4>
        </div>
      </div>
    </div>
  );
}

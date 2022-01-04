import React from "react";
import BottomRight from "./BottomRight";

export default function AppBottom(props) {
  function dateFunc(currentDate) {
    let date = new Date(currentDate * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `Last Updated: ${days[day]} ${hours}:${minutes}`;
  }

  return (
    <div className="AppBottom">
      <div className="BottomLeft">
        <h1 id="selected-city">{props.weather.city}</h1>
        <h2 id="date">{props.weather.des}</h2>
        <div className="AppBottomLeftTop">
          <img src={props.weather.imgSrc} alt="icon" />
          <br />
          <h1 id="mainTemp">{Math.round(props.weather.temp)}</h1>
          <h2 className="tempUnit">°C\°F</h2>
          <h2 id="date">{dateFunc(props.weather.time)}</h2>
        </div>
        <div className="AppBottomLeftBottom">
          <p>
            Humidity:{props.weather.hum}%
            <br />
            Wind:{props.weather.wind} km/h
          </p>
        </div>
      </div>
      <BottomRight />
    </div>
  );
}

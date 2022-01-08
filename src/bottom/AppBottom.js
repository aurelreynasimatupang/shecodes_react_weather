import React from "react";
import Forecast from "./Forecast";
import TempUnit from "./elements/TempUnit";
import FormatDate from "./elements/FormatDate";
import WeatherIcon from "./elements/WeatherIcon";

export default function AppBottom(props) {
  return (
    <div className="AppBottom">
      <div className="BottomLeft">
        <h1 id="selected-city">{props.weather.city}</h1>
        <h2 id="date">{props.weather.des}</h2>
        <div className="AppBottomLeftTop">
          <WeatherIcon code={props.weather.icon} type="large" />
          <br />
          <TempUnit temp={props.weather.temp} />
          <h2 id="date">{FormatDate(props.weather.time)}</h2>
        </div>
        <div className="AppBottomLeftBottom">
          <p>
            Humidity:{props.weather.hum}%
            <br />
            Wind:{props.weather.wind} km/h
          </p>
        </div>
      </div>
      <Forecast coord={props.weather.coord} />
    </div>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastCard(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Frid", "Sat"];
  function formatDay(time) {
    let date = new Date(time * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <span className="BottomRight">
      <div className="card cardDay">
        <div className="card-body">
          <h3> {Math.round(props.weather.temp.max)} °C</h3>
          <h3 className="min">{Math.round(props.weather.temp.min)}°C</h3>
          <h4>{formatDay(props.weather.dt)} </h4>
          <WeatherIcon code={props.weather.weather[0].icon} type="small" />
        </div>
      </div>
    </span>
  );
}

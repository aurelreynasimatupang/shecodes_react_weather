import React, { useState } from "react";
import BottomRight from "./BottomRight";
import axios from "axios";

export default function AppBottom(props) {
  const [data, setData] = useState({});

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
  function updateWeather(response) {
    setData({
      city: response.data.name,
      temp: response.data.main.temp,
      hum: response.data.main.humidity,
      wind: response.data.main.wind.speed,
      imgSrc: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: dateFunc(response.data.dt),
      coord: response.data.coord,
    });
  }

  const apiKey = "2d2ec576fd367f2433f859ba0c9d13e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);

  return (
    <div className="AppBottom">
      <div className="BottomLeft">
        <h1 id="selected-city">{data.city}</h1>
        <div className="AppBottomLeftTop">
          <img src={data.imgSrc} alt="icon" />
          <br />
          <h1 id="mainTemp">{data.temp}</h1>
          <h2 className="tempUnit">°C\°F</h2>
          <h2 id="date">{data.time}</h2>
        </div>
        <div className="AppBottomLeftBottom">
          <p>
            Humidity:{data.hum}%
            <br />
            Wind:{data.wind} km/h
          </p>
        </div>
      </div>
      <BottomRight />
    </div>
  );
}

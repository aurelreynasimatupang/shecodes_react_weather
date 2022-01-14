import React, { useState } from "react";
import AppBottom from "./bottom/AppBottom";
import axios from "axios";

export default function Widget() {
  let [data, setData] = useState({ ready: false });
  let [city, setCity] = useState("Jakarta");

  function updateWeather(response) {
    setData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      hum: response.data.main.humidity,
      des: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      time: response.data.dt,
      coord: response.data.coord,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    const apiKey = "2d2ec576fd367f2433f859ba0c9d13e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a3b65ea12488fdd227f03eda47a0bf6&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function currentCity(event) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (data.ready) {
    return (
      <div className="Widget">
        <div className="TopLeft">
          <h1 className="title"> Weather App</h1>
        </div>
        <div className="TopRight">
          <form id="city-form" onSubmit={submitCity}>
            <input
              type="text"
              id="city-input"
              placeholder="enter city"
              className="form"
              onChange={updateCity}
            />
            <input type="submit" value="search" className="searchButton" />
          </form>
          <button onClick={currentCity}>current</button>
        </div>
        <AppBottom weather={data} />
      </div>
    );
  } else {
    const apiKey = "2d2ec576fd367f2433f859ba0c9d13e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
    return "Loading...";
  }
}

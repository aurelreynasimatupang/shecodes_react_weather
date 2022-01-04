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
    console.log(response.data);
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

  if (data.ready) {
    return (
      <div className="Widget">
        <div className="TopLeft">
          <div className="row">
            <div className="col-3">
              <span className="selected" id="jakarta">
                Jakarta
              </span>
            </div>
            <div className="col-3" id="beijing">
              Beijing
            </div>
            <div className="col-3" id="amsterdam">
              Amsterdam
            </div>
            <div className="col-3" id="hanoi">
              Hanoi
            </div>
          </div>
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
          <button>current</button>
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

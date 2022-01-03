import React, { useState } from "react";
import AppBottom from "./bottom/AppBottom";
import axios from "axios";

export default function Widget() {
  let [data, setData] = useState({ ready: false });

  function updateWeather(response) {
    setData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      hum: response.data.main.humidity,
      wind: response.data.main.wind.speed,
      imgSrc: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: response.data.dt,
      coord: response.data.coord,
    });
  }
  function submitCity(event) {
    event.preventDefault();
    const apiKey = "2d2ec576fd367f2433f859ba0c9d13e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {}

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

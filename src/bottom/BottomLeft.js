import React, { useState } from "react";
import axios from "axios";

export default function BottomLeft(props) {
  let [name, setName] = useState("");
  let [temp, setTemp] = useState(null);
  let [hum, setHum] = useState(null);
  let [wind, setWind] = useState(null);
  let [imgSrc, setImg] = useState("");
  let [time, setTime] = useState("");
  let [coord, setCoord] = useState(null);
  const [ready, setReady] = useState(false);

  function dateFunc(currentDate) {
    let date = new Date(currentDate * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `Last Updated: ${days[day]} ${hours}:${minutes}`;
  }

  function updateWeather(response) {
    setName(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setImg(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setTime(dateFunc(response.data.dt));
    setCoord(response.data.coord);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="BottomLeft">
        <h1 id="selected-city">{name}</h1>
        <div class="AppBottomLeftTop">
          <img src={imgSrc} alt="icon" />
          <br />
          <h1 id="mainTemp">{temp}</h1>
          <h2 class="tempUnit">°C\°F</h2>
          <h2 id="date">{time}</h2>
        </div>
        <div class="AppBottomLeftBottom">
          <p>
            Humidity:{hum}%
            <br />
            Wind:{wind} km/h
          </p>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9a3b65ea12488fdd227f03eda47a0bf6&units=metric`;
    axios.get(url).then(updateWeather);
  }
  return <div className="BottomLeft">Loading...</div>;
}

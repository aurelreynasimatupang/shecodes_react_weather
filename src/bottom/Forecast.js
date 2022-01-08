import React, { useState } from "react";
import axios from "axios";
//import WeatherIcon from "./elements/WeatherIcon";

export default function Forecast(props) {
  //const [forecast, setForecast] = useState({});
  const [ready, setReady] = useState(false);
  function updateForecast(response) {
    console.log(response.data.daily);
    //setForecast(response.data.daily);
    setReady(true);
  }

  if (!ready) {
    const apiKey = "6ca05cf5f1705e072a89eb633f8633e9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}`;

    axios.get(url).then(updateForecast);

    return null;
  } else {
    return (
      <span className="BottomRight">
        <div className="card cardDay">
          <div className="card-body">
            <h3> °C</h3>
            <h3 className="min">°C</h3>
            <h4>Monday</h4>
          </div>
        </div>
      </span>
    );
  }
}

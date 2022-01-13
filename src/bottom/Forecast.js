import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastCard from "./elements/ForecastCard";

export default function Forecast(props) {
  const [forecast, setForecast] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function updateForecast(response) {
    setForecast(response.data.daily);
    console.log(forecast);
    setReady(true);
  }

  if (!ready) {
    const apiKey = "6ca05cf5f1705e072a89eb633f8633e9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(updateForecast);

    return null;
  } else {
    return (
      <div>
        <ForecastCard weather={forecast[1]} />
        <ForecastCard weather={forecast[2]} />
        <ForecastCard weather={forecast[3]} />
        <ForecastCard weather={forecast[4]} />
        <ForecastCard weather={forecast[5]} />
      </div>
    );
  }
}

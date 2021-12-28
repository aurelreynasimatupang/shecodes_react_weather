import React from "react";

export default function BottomLeft() {
  return (
    <div className="BottomLeft">
      <h1 id="selected-city">Jakarta</h1>
      <div class="AppBottomLeftTop">
        <i class="far fa-sun sun"></i>
        <br />
        <h1 id="mainTemp">19</h1>
        <h2 class="tempUnit">°C\°F</h2>
        <h2 id="date">Sunday 17:50</h2>
      </div>
      <div class="AppBottomLeftBottom">
        <p>
          Precipitation: 4%
          <br />
          Humidity:82%
          <br />
          Wind:10km/h
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import AppBottom from "./bottom/AppBottom";

export default function Widget() {
  let [city, setCity] = useState("Jakarta");
  let [result, setResult] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function submitCity(event) {
    event.preventDefault();
    submit();
  }
  function submit() {
    setResult(city);
  }

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
      <AppBottom city={result} />
    </div>
  );
}

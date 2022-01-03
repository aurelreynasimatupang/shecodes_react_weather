import React, { useState } from "react";
import AppBottom from "./bottom/AppBottom";

export default function Widget() {
  //let choice = ["Jakarta", "Beijing", "Amsterdam", "Hanoi"];
  let [city, setCity] = useState("");
  let [result, setResult] = useState("Jakarta");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function submitCity(event) {
    event.preventDefault();
    setResult(city);
  }

  return (
    <div className="Widget">
      <div className="TopLeft">
        <div class="row">
          <div class="col-3">
            <span class="selected" id="jakarta">
              Jakarta
            </span>
          </div>
          <div class="col-3" id="beijing">
            Beijing
          </div>
          <div class="col-3" id="amsterdam">
            Amsterdam
          </div>
          <div class="col-3" id="hanoi">
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
            class="form"
            onChange={updateCity}
          />
          <input type="submit" value="search" class="searchButton" />
        </form>
        <button>current</button>
      </div>
      <AppBottom city={result} />
    </div>
  );
}

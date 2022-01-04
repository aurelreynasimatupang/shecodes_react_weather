import React, { useState } from "react";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToF(event) {
    event.preventDefault();
    setUnit("f");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="TempUnit">
        <h1 id="mainTemp">{Math.round(props.temp)}</h1>
        <h2 className="tempUnit">
          °C \
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="TempUnit">
        <h1 id="mainTemp">{Math.round(props.temp * (9 / 5) + 32)}</h1>
        <h2 className="tempUnit">
          <a href="/" onClick={convertToC}>
            °C
          </a>
          \ °F
        </h2>
      </div>
    );
  }
}

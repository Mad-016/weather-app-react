import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <p className="row">
          <span className="col-4" id="todays-temp">
            {Math.round(props.celsius)}
          </span>
          <span className="col-6 units">
            <span id="celsius-link" className="active">
              ºC
            </span>
            <a id="fahrenheit-link" href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </p>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span>
        <p className="row">
          <span className="col-4" id="todays-temp">
            {Math.round(fahrenheit)}
          </span>
          <span className="col-6 units">
            <a id="celsius-link" href="/" onClick={showCelsius}>
              ºC
            </a>
            <span id="fahrenheit-link" className="active">
              ºF
            </span>
          </span>
        </p>
      </span>
    );
  }
}

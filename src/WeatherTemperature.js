import React, { useState } from "react";

export default function WeatherTemperature(props) {
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
        </span>
      </p>
    </span>
  );
}

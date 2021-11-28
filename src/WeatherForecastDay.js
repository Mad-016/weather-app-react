import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function min() {
    let min = Math.round(props.data.temp.min);
    return `${min}`;
  }

  function max() {
    let max = Math.round(props.data.temp.max);
    return `${max}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="card mb-2" id="forecast-card">
        <div className="row g-0">
          <div className="col-8">
            <div className="card-body">
              <p className="card-text">{day()}</p>
              <p className="card-text">
                <span className="weather-forecast-temp-min">{min()}</span>º |
                <span className="weather-forecast-temp-max"> {max()}</span>º
              </p>
            </div>
          </div>
          <div className="col-4 image-body">
            <WeatherIcon code={props.data.weather[0].icon} size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

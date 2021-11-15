import React from "react";

import "./WeatherAppToday.css";

export default function WeatherAppToday() {
  let weatherData = {
    city: "Melbourne",
    temperature: 19,
    country: "Australia",
    date: "Wednesday 20/10/2021",
    humidity: 77,
    wind: 45,
  };

  return (
    <div className="WeatherAppToday">
      <div className="weather-app-today">
        <h1>
          <span>{weatherData.city}</span>,{" "}
          <span id="country">{weatherData.country}</span>
        </h1>
        <div className="row">
          <div className="col-6">
            <img src="../images/01d.png" alt="" id="icon" />
          </div>
          <div className="col-sm-6 weather-today">
            <p id="date">{weatherData.date}</p>
            <p>
              <span id="min-temp">20</span>º |<span id="max-temp">29</span>º
            </p>
            <p className="row">
              <span className="col-4" id="todays-temp"></span>
              <span className="col-6 units">
                <a href="#" id="celsius-link" className="active">
                  {weatherData.temperature}ºC
                </a>
                <a href="#" id="fahrenheit-link">
                  77ºF
                </a>
              </span>
            </p>
            <p id="description"></p>
            <p>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </p>
            <p>
              Wind: <span id="wind">{weatherData.wind}</span>
              <span id="wind-units"> m/s</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

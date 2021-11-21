import React, { useState } from "react";
import "./WeatherAppToday.css";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";

export default function WeatherAppToday(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemp(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconValue: `../images/${response.data.weather[0].icon}.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherAppToday">
        <div className="weather-app-today">
          <h1>
            <span>{weatherData.city}</span>,{" "}
            <span id="country">{weatherData.country}</span>
          </h1>
          <div className="row">
            <div className="col-6">
              <img
                src="../images/10d.png"
                alt={weatherData.description}
                id="icon"
              />
            </div>
            <div className="col-sm-6 weather-today">
              <FormattedDate date={weatherData.date} />
              <p>
                <span id="min-temp">20</span>º |<span id="max-temp">29</span>º
              </p>
              <p className="row">
                <span className="col-4" id="todays-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="col-6 units">
                  <span id="celsius-link" className="active">
                    ºC
                  </span>
                  <span id="fahrenheit-link">ºF</span>
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
  } else {
    const apiKey = "82f33736fe5d08022fb7076137f7ac18";
    let unitsType = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unitsType}`;
    axios.get(apiUrl).then(showTemp);

    return "Loading...";
  }
}

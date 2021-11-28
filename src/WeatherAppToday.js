import React, { useState } from "react";
import "./WeatherAppToday.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";

export default function WeatherAppToday(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemp(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "86837b9ed2b9c95124a8b84bda1d4bdd";
    let unitsType = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsType}`;
    axios.get(apiUrl).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="Weather">
            <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
              <div className="Search">
                <div className="row">
                  <div className="col-8">
                    <input
                      type="search"
                      placeholder="Type a city..."
                      className="form-control"
                      id="city-input"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-2">
                    <button type="submit" className="btn btn-light w-100 h-100">
                      search
                    </button>
                  </div>
                  <div className="col-2">
                    <button
                      type="submit"
                      className="btn btn-light w-100 h-100"
                      id="here"
                    >
                      here
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <div className="col-md-4">
          <div id="forecast">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

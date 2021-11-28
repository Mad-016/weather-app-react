import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastCSS.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="card mb-2">
        <div className="row g-0">
          <div className="col-8">
            <div className="card-body">
              <p className="card-text"> Day</p>
              <p className="card-text">
                <span className="weather-forecast-temp-min">
                  {forecast[0].temp.min}
                </span>
                º |
                <span className="weather-forecast-temp-max">
                  {" "}
                  {forecast[0].temp.max}
                </span>
                º
              </p>
            </div>
          </div>
          <div className="col-4 image-body">
            <WeatherIcon code="01d" size={40} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "82f33736fe5d08022fb7076137f7ac18";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

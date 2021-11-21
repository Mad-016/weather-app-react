import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherAppToday">
        <div className="weather-app-today">
          <h1>
            <span>{props.data.city}</span>,{" "}
            <span id="country">{props.data.country}</span>
          </h1>
          <div className="row">
            <div className="col-6">
              <img
                src="../images/10d.png"
                alt={props.data.description}
                id="icon"
              />
            </div>
            <div className="col-sm-6 weather-today">
              <FormattedDate date={props.data.date} />
              <p>
                <span id="min-temp">20</span>º |<span id="max-temp">29</span>º
              </p>
              <p className="row">
                <span className="col-4" id="todays-temp">
                  {Math.round(props.data.temperature)}
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
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </p>
              <p>
                Wind: <span id="wind">{props.data.wind}</span>
                <span id="wind-units"> m/s</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

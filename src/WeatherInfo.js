import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

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
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-sm-6 weather-today">
              <WeatherTemperature celsius={props.data.temperature} />
              <p id="description">{props.data.description} </p>
              <FormattedDate date={props.data.date} />

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

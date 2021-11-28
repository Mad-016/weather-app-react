import React from "react";

export default function WeatherForecast() {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-8">
          <div className="card-body">
            <p className="card-text"> Day</p>
            <p className="card-text">
              <span className="weather-forecast-temp-min">0</span>º |
              <span className="weather-forecast-temp-max">100</span>º
            </p>
          </div>
        </div>
        <div className="col-4">
          <span className="img-fluid rounded-start"> image</span>
        </div>
      </div>
    </div>
  );
}

import "./App.css";
import WeatherAppToday from "./WeatherAppToday.js";
import WeatherForecast from "./WeatherForecast.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app" id="weather-app">
            <div className="row">
              <div className="col-md-8">
                <WeatherAppToday defaultCity="New York" />
              </div>
              <div className="col-md-4">
                <div id="forecast">
                  <WeatherForecast />
                </div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./App.css";
import WeatherAppToday from "./WeatherAppToday.js";

import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app" id="weather-app">
            <WeatherAppToday defaultCity="New York" />
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

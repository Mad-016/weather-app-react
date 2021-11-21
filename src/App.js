import "./App.css";
import Search from "./Search.js";
import WeatherAppToday from "./WeatherAppToday.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app" id="weather-app">
            <div className="row">
              <div className="col-md-8">
                <form id="search-form" className="mb-3">
                  <Search />
                </form>
                <WeatherAppToday />
              </div>
              <div className="col-md-4">
                <div id="forecast"></div>
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

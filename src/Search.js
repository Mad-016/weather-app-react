import React from "react";
export default function Search() {
  return (
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
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-light w-100">
            <span className="material-icons md-24" id="search-icon">
              search
            </span>
          </button>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-light w-100" id="here">
            <span className="material-icons md-24" id="here-icon">
              here
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

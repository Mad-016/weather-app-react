import React from "react";
export default function Search() {
  return (
    <div ClassName="Search">
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-light">
            <span className="material-icons md-24" id="search-icon">
              search
            </span>
          </button>
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-light" id="here">
            <span className="material-icons md-24" id="here-icon">
              room
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

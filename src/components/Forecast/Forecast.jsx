import React from "react";
import Current from "../Current/Current";
import Upcoming from "../Upcoming/Upcoming";

import "./forecast.css";

export default function Forecast({ forecast }) {
  return (
    <div className="forecast">
      <div className="forecast-today">
        <Current data={forecast.currentDay} />
      </div>
      <div className="forecast-upcoming">
        <Upcoming data={forecast.upcomingDays} />
      </div>
    </div>
  );
}

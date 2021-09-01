import React from "react";
import "./current.css";

export default function Current({ data }) {
  return (
    <div className="current">
      <div className="desc">
        <h2 className="location">{data.location}</h2>
        <h2>{data.temperature} °C</h2>
        <p>{data.date}</p>
        <small>{data.weekday}</small>
      </div>
      <div className="image">
        <img src={data.weatherIcon} alt="" />
        <small>{data.desciption}</small>
      </div>
    </div>
  );
}

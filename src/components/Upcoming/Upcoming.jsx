import React from "react";
import "./upcoming.css";

export default function Upcoming({ data }) {
  // console.log(data);
  return (
    <div className="upcoming">
      <h4>Next 5 Days</h4>
      <div className="upcoming-item">
        {data.map((singleDay) => (
          <div className="single-day" key={singleDay.weekday}>
            <div className="desc">
              <p>{singleDay.weekday}</p>
              <p>{singleDay.temperature} °C</p>
            </div>
            <img src={singleDay.imgUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

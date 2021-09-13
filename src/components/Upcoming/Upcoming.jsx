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
            {/* <div className="desc"> */}
            <div className="date">
              <p>{singleDay.date}</p>
              <small>{singleDay.weekday}</small>
            </div>
            <div className="temp">
              <p>{singleDay.temperature} °C</p>
            </div>
            <div className="pic">
              <img src={singleDay.imgUrl} alt="" />
              <small>{singleDay.description}</small>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

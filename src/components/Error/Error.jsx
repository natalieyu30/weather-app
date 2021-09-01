import React from "react";
import "./error.css";
import { SentimentDissatisfied } from "@material-ui/icons";

export default function Error({ msg }) {
  return (
    <div className="error">
      <SentimentDissatisfied style={{ fontSize: 40 }} />
      <p>Error occured.</p>
      <p>{msg}</p>
    </div>
  );
}

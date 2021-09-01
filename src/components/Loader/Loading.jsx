import React from "react";
import "./loading.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
}

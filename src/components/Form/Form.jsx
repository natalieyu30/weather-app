import React, { useState } from "react";
import "./form.css";

export default function Form({ submitSearch }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && location !== "") {
      submitSearch(location);
      setLocation("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search for location"
      />
      <input type="submit" value="Search" />
    </form>
  );
}

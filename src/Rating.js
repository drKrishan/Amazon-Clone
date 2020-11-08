import React from "react";
import "./Rating.css";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p key={i}>⭐</p>
        ))}
    </div>
  );
}

export default Rating;

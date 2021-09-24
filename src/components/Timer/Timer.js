import React from "react";
import "./Timer.css";

// Timer component
// This component displays the timer.
const Timer = ({ time }) => {
  return (
    <p className="Timer">
      <b>Timer : {time}</b>
    </p>
  );
};

export default Timer;

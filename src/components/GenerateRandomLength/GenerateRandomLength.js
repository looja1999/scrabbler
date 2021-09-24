import React from "react";
import "./GenerateRandomLength.css";

// Generate Random Length component.
// This component is a button which triggers onGeneratedTimerClick to generate a random number.
const GenerateRandomLength = ({ onGeneratedTimerClick }) => {
  return (
    <button
      className="GeneratedRandomLengthBtn"
      onClick={onGeneratedTimerClick}
    >
      Click to generate random length and start timer
    </button>
  );
};

export default GenerateRandomLength;

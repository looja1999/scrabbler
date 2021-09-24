import React from "react";
import "./Output.css";

// Output component
// This components outputs the total score of a word.

const Output = ({ userInputs, totalScore }) => {
  //   const historyInputs = userInputs.map((userInput) => <li>{userInput}</li>);
  return (
    <div className="Output">
      <p className="Score">
        <b>Total Score : {totalScore}</b>
      </p>
      {/* <p>
        <b>History</b>
      </p>
      <ol className="List">{historyInputs}</ol> */}
    </div>
  );
};

export default Output;

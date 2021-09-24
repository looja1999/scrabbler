import React from "react";
import timerData from "../../data/timerData";
import "./GameRules.css";

// Game Rules component.
// This component renders the game rules.
const GameRules = () => {
  const data = [];

  // Extracting keys and values from the timerData object.
  for (const [key, value] of Object.entries(timerData)) {
    data.push({ key, value });
  }

  const output = data.map((d) => (
    <li key={d.value}>{`${d.value} seconds  => ${d.key}%`}</li>
  ));

  return (
    <div className="GameRules">
      <p className="GameRules--heading">
        <b>Score Deduction</b>
      </p>
      <ul>{output}</ul>
      <p>
        <b className="GameRules--example">For example : </b> if a word is
        entered in 7 or 8 or 9 second then 50% will decrease from the total
        score.
      </p>
    </div>
  );
};

export default GameRules;

import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Output from "./components/Output/Output";
import GameRules from "./components/GameRules/GameRules";
import data from "./data/data";
import timerData from "./data/timerData";

function App() {
  const [userInputs, setUserInputs] = useState([]); // All user input state.
  const [totalScore, setTotalScore] = useState(0); // Total score of a word.

  const calculateScore = (input, secondTaken) => {
    // console.log(inputWord);
    setUserInputs([...userInputs, input]); // updating all user input.
    const inputToUpperCase = input.toUpperCase();
    const inputUpperCaseSplit = inputToUpperCase.split("");

    // Storing the score of each letter into an array.
    const valuesArray = inputUpperCaseSplit.map((input) => {
      for (const [keys, values] of Object.entries(data)) {
        const found = values.find((val) => val === input);
        if (found) {
          return parseInt(keys);
        }
      }
    });

    // Calculating the total score.
    const totalScore = valuesArray.reduce(
      (prevValue, curValue) => prevValue + curValue
    );

    // Deduction based on the time taken.
    let deductionValue = 0;
    for (const [key, value] of Object.entries(timerData)) {
      const found = value.find((val) => val === secondTaken);
      if (found) {
        deductionValue = key;
      }
    }

    // Final Score
    setTotalScore(totalScore - (totalScore * deductionValue) / 100);
  };

  // console.log(userInputs);
  // console.log("Total score : ", totalScore);

  return (
    <div>
      <InputForm
        calculateScouserInputs={userInputs}
        calculateScore={calculateScore}
      />
      <Output totalScore={totalScore} />
      <GameRules />
    </div>
  );
}

export default App;

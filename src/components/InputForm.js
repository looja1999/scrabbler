import React, { useEffect, useState } from "react";
import GenerateRandomLength from "./GenerateRandomLength/GenerateRandomLength";
import Timer from "./Timer/Timer";
import "./InputForm.css";

/**
 * InputForm component.
 * This components takes the input from the users and checks if the input is valid or not.
 * It then passes the word to the App.js to calculate the final score before displaying to the user.
 */

const InputForm = ({ calculateScore }) => {
  // State
  const [inputText, setInputText] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [valueEntered, setValueEntered] = useState(false);
  const [invalidWord, setInvalidWord] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [lastEnteredWord, setLastEntered] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wordLength, setWordLength] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Invalid input check
  const inputError = isTouched && valueEntered && inputText.length === 0;

  // Words check.
  const inputWords = inputText.split(" ").length > 1;
  const inputWordLength =
    (inputText.length === wordLength && inputText.length > 0) ||
    inputText.length === 0;

  // Button disable check.
  let inputButtonDisabled = false;
  inputText.length > 0
    ? (inputButtonDisabled = false)
    : (inputButtonDisabled = true);

  inputText.length == wordLength
    ? (inputButtonDisabled = false)
    : (inputButtonDisabled = true);

  // const invalidWordInput = inputText.length > 0 && invalidWord;

  // Event handlers

  // Handles input change in the text field.
  const inputTextChangeHandler = (event) => {
    const hasNumber = /\d/;
    const hasSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (
      hasNumber.test(event.target.value) ||
      hasSpecialCharacters.test(event.target.value)
    ) {
      return setInvalidInput(true);
    }

    setInputText(event.target.value);
    setValueEntered(true);
    setInvalidWord(false);
  };

  // Checks if the input is touched.
  const inputTextSelectHandler = () => {
    setIsTouched(true);
  };

  // Generates random number of length of word.
  const onGeneratedTimerClick = () => {
    setDidMount(true);
    setWordLength(Math.ceil(Math.random() * 8));
    setSeconds(0);
  };

  // Initial random number generate
  useEffect(() => {
    if (!didMount) {
      onGeneratedTimerClick();
    }
  }, [didMount]);

  // Form submit handler
  const submitHandler = async (event) => {
    event.preventDefault();

    const inputWord = inputText.split(" ")[0];
    setLastEntered(inputText);

    if (!inputError && inputText !== "") {
      // Add API Request here.
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
        );

        if (!response.ok) throw new Error("Invalid word");
        setInvalidWord(false);
        if (inputWordLength) {
          calculateScore(inputWord, seconds);
        }
      } catch (e) {
        console.log(e);
        setInvalidWord(true);
      }
      setInputText("");
      setIsTouched(false);
      setInvalidInput(false);
      setWordLength(0);
      onGeneratedTimerClick();
      setIsLoading(false);
      setDidMount(false);
      setSeconds(0);
    }
  };

  // Inital GenerateTimer call.
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds < 15) {
        setSeconds((prev) => prev + 1);
      } else {
        setSeconds(0);
        onGeneratedTimerClick();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [submitHandler, onGeneratedTimerClick]);

  return (
    <>
      <GenerateRandomLength onGeneratedTimerClick={onGeneratedTimerClick} />

      <form className="InputForm" onSubmit={submitHandler}>
        <Timer time={seconds} />
        <label htmlFor="word" className="InputLabel">
          Enter a word {wordLength !== 0 && ` of length ${wordLength}`}
        </label>
        <input
          type="text"
          id="word"
          className="InputText"
          placeholder="Enter here"
          onChange={inputTextChangeHandler}
          onSelect={inputTextSelectHandler}
          value={inputText}
        />

        {/* Validation and display error*/}
        {inputError && <p className="InvalidInput">Empty input</p>}
        {inputWords && (
          <p className="InvalidInput" style={{ color: "blue" }}>
            {`Only ${inputText.split(" ")[0]} will be accepeted.`}
          </p>
        )}
        {invalidWord && (
          <p className="InvalidInput" style={{ color: "purple" }}>
            Invalid Word
          </p>
        )}
        {invalidInput && (
          <p className="InvalidInput" style={{ color: "green" }}>
            Must only be word
          </p>
        )}
        {!inputWordLength && (
          <p className="InvalidInput" style={{ color: "#A1045A" }}>
            Word length does not match
          </p>
        )}

        {/* Submit button */}
        <input
          type="submit"
          className="InputSubmit"
          disabled={inputButtonDisabled}
          value={isLoading ? "Loading .... " : "Submit"}
        />

        <p className="LastEnteredWord">
          Last Entered Word : <b>{lastEnteredWord} </b>
        </p>
      </form>
    </>
  );
};

export default InputForm;

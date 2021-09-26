import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputForm from "./InputForm";
import React from "react";

describe("InputForm Component", () => {

  test("Verifying if the Submit button is disabled intially", () => {
    render(<InputForm />);
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);
    expect(submitButton).toBeDisabled();
  });

  test("Verifying if the error is displayed when the user inputs characters other then alphabets", () => {
    render(<InputForm />);
    const inputElement = screen.getByPlaceholderText("Enter here");
    userEvent.type(inputElement, "123");
    const errorDisplay = screen.getByText(/Must only be word/i, {
      exact: false,
    });
    expect(errorDisplay).toBeInTheDocument();
  });

  test("Verifying if the error is displayed when the user inputs wrong length", () => {
    render(<InputForm />);
    const inputElement = screen.getByPlaceholderText("Enter here");
    userEvent.type(inputElement, "asdfghjkl");
    const errorDisplay = screen.getByText(/Word length does not match/i, {
      exact: false,
    });
    expect(errorDisplay).toBeInTheDocument();
  });

  test("Verifying if the timer reset's when the Generate random length button is clicked.", () => {
    render(<InputForm />);
    const generateRandomElement = screen.getByRole("button", {
      name: /Click to generate random length and start timer/i,
    });
    userEvent.click(generateRandomElement);
    const timerDisplayElement = screen.getByText(/Timer : 0/i, {
      exact: false,
    });
    expect(timerDisplayElement).toBeInTheDocument();
  });
});

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
});

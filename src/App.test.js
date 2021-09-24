import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("Verifying if the Generate random length button is working", () => {
    render(<App />);
    const generateRandomButtonElement = screen.getByText(
      /click to generate random length/i,
      { exact: false }
    );
    const textBoxElement = screen.getByRole("textbox", {
      name: /Enter a word of length/i,
      exact: false,
    });
    userEvent.click(generateRandomButtonElement);
    expect(textBoxElement).toBeInTheDocument();
  });
});

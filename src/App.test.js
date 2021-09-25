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

  test("Verify, if the total score is intially 0", () => {
    render(<App />);
    const totalScoreElement = screen.getByText(/Total score : 0/i);
    expect(totalScoreElement).toBeInTheDocument();
  });
});

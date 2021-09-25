import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenerateRandomLength from "./GenerateRandomLength";

describe("GenerateRandomLength Component", () => {
  test("Verifying if generate random button is present.", () => {
    render(<GenerateRandomLength />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});

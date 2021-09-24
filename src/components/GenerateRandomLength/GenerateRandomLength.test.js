import { render, screen } from "@testing-library/react";
import GenerateRandomLength from "./GenerateRandomLength";

describe("GenerateRandomLength Component", () => {
  test("Verifying if generate random button is present.", () => {
    render(<GenerateRandomLength />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});

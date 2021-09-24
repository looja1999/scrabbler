import { render, screen } from "@testing-library/react";
import Output from "./Output";

describe("Output Component", () => {
  test("Verify's if there is total score on the screen", () => {
    render(<Output />);
    const linkElement = screen.getByText(/total score/i);
    expect(linkElement).toBeInTheDocument();
  });
});

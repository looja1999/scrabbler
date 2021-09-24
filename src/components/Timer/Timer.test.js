import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer Components", () => {
  test("Verify's if the timer is present", () => {
    render(<Timer />);
    const timerElement = screen.getByText(/timer/i, { exact: false });
    expect(timerElement).toBeInTheDocument();
  });
});

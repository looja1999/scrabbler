import { render, screen, fireEvent, mount} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("Verifying if the total score is intially 0", () => {
    render(<App />);
    const totalScoreElement = screen.getByText(/Total score : 0/i);
    expect(totalScoreElement).toBeInTheDocument();
  });
});

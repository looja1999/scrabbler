import { render, screen } from "@testing-library/react";
import GameRules from "./GameRules";

describe("GameRules Components", () => {
  test("Verify's if the game rules are rendered", () => {
    render(<GameRules />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});

import { checkWinner } from "./game";

test.each([
  [["x", "x", "x", "", "", "", "", "", ""], "x", true], // All top-row marked by "x"
  [["", "", "", "x", "x", "x", "", "", ""], "x", true], // All middle-row marked by "x"
  [["", "", "", "", "", "", "x", "x", "x"], "x", true], // All bottom-row marked by "x"
  [["o", "o", "o", "", "", "", "", "", ""], "o", true], // All top-row marked by "o"
  [["", "", "", "o", "o", "o", "", "", ""], "o", true], // All middle-row marked by "o"
  [["", "", "", "", "", "", "o", "o", "o"], "o", true], // All bottom-row marked by "o"
  [["x", "", "", "x", "", "", "x", "", ""], "x", true], // All left column marked by "x"
  [["", "x", "", "", "x", "", "", "x", ""], "x", true], // All middle column marked by "x"
  [["", "", "x", "", "", "x", "", "", "x"], "x", true], // All right column marked by "x"
  [["x", "", "", "", "x", "", "", "", "x"], "x", true], // Diagonal from top-left to bottom-right marked by "x"
  [["", "", "x", "", "x", "", "x", "", ""], "x", true], // Diagonal from top-right to bottom-left marked by "x"
  [["o", "", "", "", "o", "", "", "", "o"], "o", true], // Diagonal from top-left to bottom-right marked by "o"
  [["", "", "o", "", "o", "", "o", "", ""], "o", true], // Diagonal from top-right to bottom-left marked by "o"
  [["x", "o", "x", "o", "x", "o", "o", "x", "o"], "o", false], // No winning combination
])("checkWinner() where all %s are marked from the same player %s", (board, player, expected) => {
  expect(checkWinner(board, player)).toBe(expected);
});

import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export function Guess({ guess, answer, setGameState }) {
  const results = guess ? checkGuess(guess, answer) : null;
  const win = guess === answer;

  React.useEffect(() => {
    if (win) {
      setGameState("won");
    }
  }, [guess]);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${guess ? results[num].status : null}`}
        >
          {guess ? results[num].letter : null}
        </span>
      ))}
    </p>
  );
}

import React from "react";
import { Guess } from "./GuessResultsChild.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer, setGameState }) {
  const guessesRange = range(NUM_OF_GUESSES_ALLOWED);

  React.useEffect(() => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }, [guesses, setGameState]);

  return (
    <div className="guess-results">
      {guessesRange.map((index) => (
        <Guess
          key={index}
          guess={guesses[index]}
          answer={answer}
          setGameState={setGameState}
        />
      ))}
    </div>
  );
}

export default GuessResults;

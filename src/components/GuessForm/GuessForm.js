import React from "react";

import { handleSubmit } from "./GuessForm.helpers";

function GuessForm({ guesses, setGuesses, gameState }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => handleSubmit(e, guess, setGuess, guesses, setGuesses)}
    >
      <label htmlFor="guess-input">Enter your guess</label>
      <input
        required
        type="text"
        name="guess-input"
        disabled={gameState}
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        pattern="[A-Z]{5}"
        title="Please enter a word with 5 letters."
      />
    </form>
  );
}

export default GuessForm;

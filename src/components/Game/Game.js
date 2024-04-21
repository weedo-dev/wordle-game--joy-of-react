import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import EndBanner from "../EndBanner";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("");

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameState("");
  }

  return (
    <>
      {gameState ? (
        <EndBanner
          gameState={gameState}
          answer={answer}
          guesses={guesses}
          restartGame={restartGame}
        />
      ) : null}
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameState={setGameState}
      />
      <GuessForm
        guesses={guesses}
        setGuesses={setGuesses}
        gameState={gameState}
      />
    </>
  );
}

export default Game;

import React from "react";
import { GameLost, GameWon } from "./EndBannerChild";

function EndBanner({ gameState, answer, guesses, restartGame }) {
  const divClass = gameState === "won" ? "happy banner" : "sad banner";

  return (
    <div className={divClass}>
      {gameState === "won" ? (
        <GameWon guesses={guesses} />
      ) : (
        <GameLost answer={answer} />
      )}
      <button className="restart" onClick={restartGame}>
        Restart
      </button>
    </div>
  );
}

export default EndBanner;

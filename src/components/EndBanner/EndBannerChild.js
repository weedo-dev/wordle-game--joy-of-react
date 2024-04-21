export function GameLost({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

export function GameWon({ guesses }) {
  const numOfGuesses = guesses.length;
  return (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {numOfGuesses > 1 ? `${numOfGuesses} guesses` : "1 guess"}
      </strong>
      .
    </p>
  );
}

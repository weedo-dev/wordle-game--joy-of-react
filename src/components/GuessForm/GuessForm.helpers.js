export function handleSubmit(e, guess, setGuess, guesses, setGuesses) {
  e.preventDefault();
  const nextGuesses = [...guesses, guess];
  setGuesses(nextGuesses);
  setGuess("");
}

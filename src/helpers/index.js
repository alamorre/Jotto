/**
* @method getLatterMatchCount
* @param {string} guessedWord - Guessed word
* @param {string} secretWord - Secret word
* @returns {number} - number of matching letters
*/
export function getLetterMatchCount(guessedWord, secretWord){
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}

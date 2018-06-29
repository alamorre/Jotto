import {getLetterMatchCount} from './';

describe('getLatterMatchCount', () => {
  const secretWord = 'party';
  test('returns the correct count with no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns the correct count with 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns the correct count with duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('apple', secretWord);
    expect(letterMatchCount).toBe(2);
  });
});

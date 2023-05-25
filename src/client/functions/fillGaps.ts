import { Letter } from '../context/@types.context';

const fillGaps = (letters: Letter[]): Letter[] => {
  if (letters.length === 0) return letters;

  const lastIndex = letters[letters.length - 1].letter_index;
  const filledLetters = [];
  for (let i = 0; i <= lastIndex; i++) {
    const found = letters.find(letter => letter.letter_index === i);
    filledLetters.push(found ? found : { letter: '•', letter_index: i });
  }
  return filledLetters;
};

export default fillGaps;

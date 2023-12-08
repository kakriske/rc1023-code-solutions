export function charCounts(word: string): CharacterCounts {
  const obj: CharacterCounts = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

interface CharacterCounts {
  [char: string]: number;
}

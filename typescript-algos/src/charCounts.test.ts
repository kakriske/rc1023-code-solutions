import { charCounts } from './charCounts';

// Your code goes here
describe('charCounts', () => {
  it('check that characters are counted properly', () => {
    const word = 'pepper';
    const result = charCounts(word);
    expect(result).toEqual({ p: 3, e: 2, r: 1 });
  });
});

describe('charCounts', () => {
  it('check that upper and lowercase characters are counted', () => {
    const word = 'PaSseNgEr';
    const result = charCounts(word);
    expect(result).toEqual({ p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 });
  });
});

describe('charCounts', () => {
  it('Check that spaces count as characters', () => {
    const word = 'Hello World';
    const result = charCounts(word);
    expect(result).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      ' ': 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});

describe('charCounts', () => {
  it('checks that empty object is returned on empty string', () => {
    const word = '';
    const result = charCounts(word);
    expect(result).toEqual({});
  });
});

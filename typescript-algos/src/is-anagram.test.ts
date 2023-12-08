import { isAnagram } from './is-anagram';

// Your code goes here
describe('isAnagram', () => {
  it('determine if astronomer and moon starer are anagrams', () => {
    const firstString = 'astronomer';
    const secondString = 'moon starer';
    const output = isAnagram(firstString, secondString);
    expect(output).toEqual(true);
  });
});

describe('isAnagram', () => {
  it('determine if listen and silent are anagrams', () => {
    const firstString = 'listen';
    const secondString = 'silent';
    const output = isAnagram(firstString, secondString);
    expect(output).toEqual(true);
  });
});

describe('isAnagram', () => {
  it('determine if programmer and poor gamer are anagrams', () => {
    const firstString = 'programmer';
    const secondString = 'poor gamer';
    const output = isAnagram(firstString, secondString);
    expect(output).toEqual(false);
  });
});

describe('isAnagram', () => {
  it('determine if red dad and rad ede are anagrams', () => {
    const firstString = 'red dad';
    const secondString = 'rad ede';
    const output = isAnagram(firstString, secondString);
    expect(output).toEqual(false);
  });
});

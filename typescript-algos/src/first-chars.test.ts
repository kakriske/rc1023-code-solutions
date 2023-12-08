import { firstChars } from './first-chars';

// Your code goes here
describe('firstChars', () => {
  it('returns first character', () => {
    const argument = 'React';
    const output = firstChars(1, argument);
    expect(output).toEqual('R');
  });
});

describe('firstChars', () => {
  it('returns first 4 characters', () => {
    const argument = 'JavaScript';
    const output = firstChars(4, argument);
    expect(output).toEqual('Java');
  });
});

describe('firstChars', () => {
  it('returns first 20 characters of string', () => {
    const argument = 'LearningFuze';
    const output = firstChars(20, argument);
    expect(output).toEqual('LearningFuze');
  });
});

describe('firstChars', () => {
  it('returns an empty string even with length a positive integer', () => {
    const argument = '';
    const output = firstChars(5, argument);
    expect(output).toEqual('');
  });
});

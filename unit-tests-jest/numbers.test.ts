import { evenNumbers, toDollars } from './numbers';

describe('toDollars', () => {
  it('format to dollars and cents', () => {
    const amount = 43.666;
    const result = toDollars(amount);
    expect(result).toEqual('$43.67');
  });
});

describe('even numbers', () => {
  it('returns all even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});

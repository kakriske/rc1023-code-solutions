import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('make sure numbers are listed from 1 to limit', () => {
    const result = fuzeBuzz(2);
    expect(result).toEqual(['1', '2']);
  });
});

describe('fuzeBuzz', () => {
  it('verify learning is added to the array', () => {
    const result = fuzeBuzz(3);
    expect(result).toEqual(['1', '2', 'Learning']);
  });
});

describe('fuzeBuzz', () => {
  it('make sure Fuze is returned if divisible by 5', () => {
    const result = fuzeBuzz(5);
    expect(result).toEqual(['1', '2', 'Learning', '4', 'Fuze']);
  });
});

describe('fuzeBuzz', () => {
  it('make sure LearningFuze is returned if divisible by 15', () => {
    const result = fuzeBuzz(15);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});

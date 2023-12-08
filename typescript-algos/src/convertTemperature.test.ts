import { convertTemperature } from './convertTemperature';

// Your code goes here
describe('convertTemperature', () => {
  it('check temperature kelvin conversion', () => {
    const tempCelsius = 36.5;
    const expectedKelvin = 309.65;
    const [kelvinResult, fahrenheitResult] = convertTemperature(tempCelsius);
    expect([kelvinResult, fahrenheitResult]).toContainEqual(expectedKelvin);
  });
});

describe('convertTemperature', () => {
  it('check temperature kelvin conversion', () => {
    const tempCelsius = 122.11;
    const expectedKelvin = 395.26;
    const [kelvinResult, fahrenheitResult] = convertTemperature(tempCelsius);
    expect([kelvinResult, fahrenheitResult]).toContainEqual(expectedKelvin);
  });
});

describe('convertTemperature', () => {
  it('check temperature fahrenheit conversion', () => {
    const tempCelsius = 36.5;
    const expectedFahrenheit = 97.7;
    const [kelvinResult, fahrenheitResult] = convertTemperature(tempCelsius);
    expect([kelvinResult, fahrenheitResult]).toContainEqual(expectedFahrenheit);
  });
});

describe('convertTemperature', () => {
  it('check temperature fahrenheit conversion', () => {
    const tempCelsius = 122.11;
    const expectedFahrenheit = 251.798;
    const [kelvinResult, fahrenheitResult] = convertTemperature(tempCelsius);
    expect([kelvinResult, fahrenheitResult]).toContainEqual(expectedFahrenheit);
  });
});

describe('convertTemperature', () => {
  it('check temperature for both kelvin and fahrenheit conversion', () => {
    const tempCelsius = 0;
    const expectedKelvin = 273.15;
    const expectedFahrenheit = 32;
    const [kelvinResult, fahrenheitResult] = convertTemperature(tempCelsius);
    expect([kelvinResult, fahrenheitResult]).toEqual([
      expectedKelvin,
      expectedFahrenheit,
    ]);
  });
});

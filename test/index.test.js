import { fizzbuzz } from "../src/index.js";

describe('Index', () => {
    test('Debería devolver un number como un string', () => {
      expect(fizzbuzz('1')).toBe('1');
    });
  

    test('Debería return FIZZ si number es divisible por 3', () => {
      expect(fizzbuzz(6)).toBe('FIZZ');
    });

    test('Debería return BUZZ si number es divisible por 5', () => {
      expect(fizzbuzz(5)).toBe('BUZZ');
    });
});
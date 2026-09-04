import {test, expect} from 'vitest';
import { fizzBuzz } from './fizzBuzz';
test('return "1" for 1',() => {
    expect(fizzBuzz(1)).toBe("1")
})


test('is returning "Fizz" for multiple of 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
});

test('is returning "Buzz" for multiple of 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
});
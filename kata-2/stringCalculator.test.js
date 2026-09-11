import {expect, test} from 'vitest'
import { Add } from './stringCalculator'

test('Empty strings return 0', () => {
    expect(Add("")).toBe(0)
})

test("Return sum of selected numbers", () =>{
    expect(Add("1,2")).toBe(3)
    expect(Add(",3")).toBe(3)
})

test("Ignore numbers bigger than 1000", () => {
    expect(Add("1, 1000")).toBe(1);
    expect(Add("1, 1002,2,")).toBe(3);
})
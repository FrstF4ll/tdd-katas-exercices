import {expect, test} from 'vitest'
import { Add } from './stringCalculator'

test('Empty strings return 0', () => {
    expect(Add("")).toBe(0)
})

test("Return sum of selected numbers", () =>{
    expect(Add("1,2")).toBe(3)
    expect(Add(",3")).toBe(3)
})

test("Handle new lines as separators", () => {
    expect(Add("1\n2")).toBe(3)
    expect(Add("2\n2,3")).toBe(7)
    expect(Add("2,\n6")).toBe(8)
})
test("Ignore numbers bigger than 1000", () => {
    expect(Add("1, 1000")).toBe(1);
    expect(Add("1, 1002,2,")).toBe(3);
})

test("Accept custom delimiter", () => {
    expect(Add("//;\n1;2")).toBe(3)
    expect(Add("//x\n5x5")).toBe(10)
})

test("Throw error on negative numbers", () => {
    expect(() =>Add("-1,3")).toThrow("-1")
    expect(() => Add("-3,-4")).toThrow("-3,-4")
})
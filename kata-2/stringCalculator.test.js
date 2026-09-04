import {expect, test} from 'vitest'
import { Add } from './stringCalculator'

test('Empty strings return 0', () => {
    expect(Add("")).toBe(0)
})

test("Return sum of selected numbers", () =>{
    expect(Add("1,2")).toBe(3)
    expect(Add(",3")).toBe(3)
})
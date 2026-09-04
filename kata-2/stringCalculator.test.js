import {expect, test} from 'vitest'
import { Add } from './stringCalculator'

test('Empty strings return 0', () => {
    expect(Add("")).toBe(0)
})
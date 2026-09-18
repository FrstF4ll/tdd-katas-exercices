import {test, expect} from "vitest";
import {tennisGame} from "./tennisGame";
test("Win conditions are correctly defined", () => {
    expect(tennisGame(4, 0)).toBe("Win for player 1")
    expect(tennisGame(0, 4)).toBe("Win for player 2")
    expect(tennisGame(6, 4)).toBe("Win for player 1")
    expect(tennisGame(4, 6)).toBe("Win for player 2")
})
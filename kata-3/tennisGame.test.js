import {test, expect, describe } from "vitest";
import {tennisGame, getScoreLabel} from "./tennisGame";
test("Display winning player", () => {
    expect(tennisGame(4, 0)).toBe("Win for player 1")
    expect(tennisGame(0, 4)).toBe("Win for player 2")
    expect(tennisGame(6, 4)).toBe("Win for player 1")
    expect(tennisGame(4, 6)).toBe("Win for player 2")
})

test("Display advantaged player", () => {
    const advantagePlayer1 = "Advantage for player 1"
    const advantagePlayer2 = "Advantage for player 2"

    expect(tennisGame(4, 3)).toBe(advantagePlayer1)
    expect(tennisGame(3, 4)).toBe(advantagePlayer2)
    expect(tennisGame(6,5 )).toBe(advantagePlayer1)
    expect(tennisGame(5, 6)).toBe(advantagePlayer2)
})

describe("Map score to label", () => {
    test.each([
        [0, "Love"],
        [1, "Fifteen"],
        [2, "Thirty"],
        [3, "Forty"],
    ])("getScoreLabel(%i) -> %s", (score, label) => {
        expect(getScoreLabel(score)).toBe(label)
    })
})

describe("Display score diff based labels", () => {
    test.each([
        [1, 0, "Fifteen-Love"],
        [0, 2, "Love-Thirty"],
        [3, 1, "Forty-Fifteen"],
        // just a few representative combos, not all 16
    ])("(%i, %i) -> %s", (player_1, player_2, label) => {
        expect(tennisGame(player_1, player_2)).toBe(label)
    })
})
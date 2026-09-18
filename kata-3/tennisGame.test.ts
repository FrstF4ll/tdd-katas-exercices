import {test, expect, describe } from "vitest";
import {tennisGame, getScoreLabel} from "./tennisGame";
test("Display which player has won", () => {
    expect(tennisGame(4, 0)).toBe("Win for player 1")
    expect(tennisGame(0, 4)).toBe("Win for player 2")
    expect(tennisGame(6, 4)).toBe("Win for player 1")
    expect(tennisGame(4, 6)).toBe("Win for player 2")
})

test("Display has the advantage", () => {
    const advantagePlayer1 = "Advantage for player 1"
    const advantagePlayer2 = "Advantage for player 2"

    expect(tennisGame(4, 3)).toBe(advantagePlayer1)
    expect(tennisGame(3, 4)).toBe(advantagePlayer2)
    expect(tennisGame(6,5 )).toBe(advantagePlayer1)
    expect(tennisGame(5, 6)).toBe(advantagePlayer2)
})

describe("Map score to labels", () => {
    test.each([
        [0, "Love"],
        [1, "Fifteen"],
        [2, "Thirty"],
        [3, "Forty"],
    ])("getScoreLabel(%i) -> %s", (score, label) => {
        expect(getScoreLabel(score)).toBe(label)
    })
})

describe("Display label based on mapping", () => {
    test.each([
        [1, 0, "Fifteen-Love"],
        [0, 2, "Love-Thirty"],
        [3, 1, "Forty-Fifteen"],
        // just a few representative combos, not all 16
    ])("(%i, %i) -> %s", (player_1, player_2, label) => {
        expect(tennisGame(player_1, player_2)).toBe(label)
    })
})

describe("Manage tie case for score above 3", () => {
    test.each([
        [4,4, "Deuce"],
        [5,5, "Deuce"]
    ])("(%i, %i) -> %s", (player_1, player_2, label) => {
        expect(tennisGame(player_1, player_2)).toBe(label)
    })
})

describe("Manage tie case for score under 4", ()=> {
    test.each([
        [0,0, "Love-All"],
        [3,3, "Forty-All"]
    ])("(%i, %i) -> %s", (player_1, player_2, label) => {
        expect(tennisGame(player_1, player_2)).toBe(label)
    })
})
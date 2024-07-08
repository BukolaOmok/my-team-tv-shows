import { test, expect } from "vitest";
import { forEpisodeCode } from "./forEpisodseCode";

test ("add 0 to front of season or episode number that is less than 10 to make it double digit and add S in front of season number and E in front of episode number", () => {
    expect(forEpisodeCode({ season: 1, number: 21 })).toBe("S01E21")
})

test ("add 0 to front of season or episode number that is less than 10 to make it double digit and add S in front of season number and E in front of episode number", () => {
    expect(forEpisodeCode({ season: 2, number: 2 })).toBe("S02E02")
})

test ("add 0 to front of season or episode number that is less than 10 to make it double digit and add S in front of season number and E in front of episode number", () => {
    expect(forEpisodeCode({ season: 5, number: 9 })).toBe("S05E09")
})

test ("add 0 to front of season or episode number that is less than 10 to make it double digit and add S in front of season number and E in front of episode number", () => {
    expect(forEpisodeCode({ season: 10, number: 23 })).toBe("S10E23")
})



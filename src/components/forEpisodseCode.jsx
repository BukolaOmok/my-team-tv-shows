const forEpisodeCode = (episode) => {
    return episode.season < 10 || episode.number < 10
    ? `S${episode.season.toString().padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`
    : `S${episode.season}E${episode.number}`;
}

export {forEpisodeCode}
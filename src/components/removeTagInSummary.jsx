const removeTagInSummary = (episode) => {
    return episode.summary.replace(/<[^>]+>/g, "")
}

export {removeTagInSummary}
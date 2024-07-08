import episodes from "../data/gameOfThronesEpisodes.json";
import EpisodeDisplay from "./episodeDisplay.jsx";


export default function TVShowsApp() {
    

    const mapEpisodeProperties = episodes.map((episode) => {
        return <EpisodeDisplay 
        key = {episode.id}
        name = {episode.name}
        seasonEpisode={
            episode.season <= 9 || episode.number <= 9
              ? `S${episode.season.toString().padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`
              : `S${episode.season}E${episode.number}`
          }
        image = {episode.image.medium}
        summary = {episode.summary}
        />
    })
    return (
        <div>
         {mapEpisodeProperties}   
        </div>
    )
}
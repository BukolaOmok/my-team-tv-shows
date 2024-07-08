import episodes from "../data/gameOfThronesEpisodes.json";
import EpisodeDisplay from "./episodeDisplay.jsx";
import { forEpisodeCode } from "./forEpisodseCode";


export default function TVShowsApp() {
    

    const mapEpisodeProperties = episodes.map((episode) => {
        return <EpisodeDisplay 
        key = {episode.id}
        name = {episode.name}
        seasonEpisode={forEpisodeCode(episode)}
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
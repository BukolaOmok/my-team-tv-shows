
export default function EpisodeDisplay (props) {
    return (
       <div>
       <h2>{props.name} - {props.seasonEpisode}</h2>
       <img src={props.image} alt={props.name} />
       <p>{props.summary}</p>
       </div>
    )

}


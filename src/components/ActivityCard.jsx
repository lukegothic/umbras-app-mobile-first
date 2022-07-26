import { useState } from "react";

const getIcon = (activityType) => {
    switch(activityType.toLowerCase()) {
        case "otros":
            return "🌌";
        case "rol de mesa":
            return "📚";
        case "torneo":
            return "🏆";
        case "infantil":
            return "👶";
        case "rol en vivo":
            return "🎭";
        case "taller":
            return "🔨";
        case "charla":
            return "☕";
        case "juego de mesa":
            return "🎲";
        case "wargame":
            return "⚔️";
        default:
            return "🌡️";
    }
}
const getDuration = (duration) => {
    const durationNumber = parseInt(duration);
    const hours = Math.floor(durationNumber / 60);
    const minutes = durationNumber % 60;
    return { hours, minutes };
}
const ActivityCard = ({ activity }) => {
    const { hours, minutes } = getDuration(activity.Duration);
    console.log(hours, minutes);
    const [ collapsed, setCollapsed ] = useState(activity.LongSummary.length > 150);
    return <div className={`activitycard ${collapsed && "collapsed"} ${activity.Type}`} onClick={() => setCollapsed(false)}>
        <div className="title">
            <div>{getIcon(activity.Type)} { activity.Name }</div>
        </div>
        <div>
            <div className="flex">
                <div>
                    <span>📅 { new Date(activity.ActivityDate).toLocaleString('es-ES', { weekday: "long", hour: "numeric", minute: "2-digit", hour12: false }) }</span>
                    { (hours || minutes) && <><span> · </span><span>⌚ { hours > 0 && <span>{hours}h</span> }{ minutes > 0 && <span> {minutes}'</span> }</span></>}
                 </div>
                { activity.Place !== "Sin lugar asignado" && <div className="align-right">📍 { activity.Place }</div> }
            </div>
            { activity.MaxParticipants > 0 && 
                    <div style={{ position:"relative", width: "100%" }}>
                        <progress className="progress-bar" value={activity.NumParticipants} max={activity.MaxParticipants}></progress>
                        <span className="progress-label">{activity.NumParticipants} de {activity.MaxParticipants} inscritos</span>
                    </div>
            }
            { activity.LongSummary && <>
                    { activity.MaxParticipants <= 0 && <hr /> }
                    <div className="justified">{ activity.LongSummary }</div>
                </>
            }
            
        </div>
        { collapsed && <div className="plus">↧ Ver más ↧</div> }
    </div>;
}

export default ActivityCard;
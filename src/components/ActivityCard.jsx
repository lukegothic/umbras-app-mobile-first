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
        default:
            return "🌡️";
    }
}

const ActivityCard = ({ activity }) => {
    return <div className={`activitycard ${activity.Type}`}>
        <div className="title">
            <div>{getIcon(activity.Type)} { activity.Name }</div>
        </div>
        <div>
            <div className="flex">
                <div>⌚ { new Date(activity.ActivityDate).toLocaleString('es-ES', { weekday: "long", hour: "numeric", minute: "2-digit", hour12: false }) }</div>
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
    </div>;
}

export default ActivityCard;
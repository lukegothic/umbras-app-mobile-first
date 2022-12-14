import { useState } from "react";
import { ActivitiesProgress } from "./ActivitiesProgress";
import ActivitiesProgressSimple from "./ActivitiesProgressSimple";

const getIcon = (activityType) => {
    switch(activityType.toLowerCase()) {
        case "otros":
            return "๐";
        case "rol de mesa":
            return "๐ฐ";
        case "torneo":
            return "๐";
        case "infantil":
            return "๐ถ";
        case "rol en vivo":
            return "๐ญ";
        case "taller":
            return "๐จ";
        case "charla":
            return "โ";
        case "juego de mesa":
            return "๐ฒ";
        case "wargame":
            return "โ๏ธ";
        case "escape room":
            return "๐";
        default:
            return "๐";
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
    const [ collapsed, setCollapsed ] = useState(activity.LongSummary && activity.LongSummary.length > 150);
    return <div className={`activitycard ${collapsed && "collapsed"} ${activity.Type}`} onClick={() => setCollapsed(false)}>
        <div className="activitycard-header">
            <div className="activitycard-header-title"><span className="activitycard-header-icon">{getIcon(activity.Type)}</span> { activity.Name }</div>
            <div className="activitycard-header-subtitle"><span>ยป {activity.Type}</span></div>
        </div>
        <div>
            <div className="flex">
                <div>
                    <span>๐๏ธ { new Date(activity.ActivityDate).toLocaleString('es-ES', { weekday: "long", hour: "numeric", minute: "2-digit", hour12: false }) }</span>
                    { (hours || minutes) && <><span> ยท </span><span>โ { hours > 0 && <span>{hours}h</span> }{ minutes > 0 && <span> {minutes}'</span> }</span></>}
                 </div>
                { activity.Place !== "Sin lugar asignado" && <div className="align-right">๐ { activity.Place }</div> }
            </div>
            { activity.MaxParticipants > 0 && <ActivitiesProgress numParticipants={activity.NumParticipants} maxParticipants={activity.MaxParticipants} /> }
            { activity.LongSummary && <>
                    { activity.MaxParticipants <= 0 && <hr /> }
                    <div className="justified">{ activity.LongSummary }</div>
                </>
            }
            
        </div>
        { collapsed && <div className="plus">โง Ver mรกs โง</div> }
    </div>;
}

export default ActivityCard;

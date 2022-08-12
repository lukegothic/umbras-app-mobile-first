import ActivityCard from "./ActivityCard";

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const ActivitiesGroup = ({ group, activities }) => {
    const d = new Date(group.year, group.month, group.date);
    return <>
        <div className="activity-group-header">
            <div>
                <img style={{ backgroundColor: group.fondo }} className="activity-group-header-dropimage" width="48" src={`./assets/group-headers/group-header-${group.date}.png`} />
                <span className="activity-group-header-text" style={{color: group.color}}>Soy {group.personaje} ¡{group.entradilla} {capitalizeFirstLetter(d.toLocaleString("es-ES", {weekday:"long"}))}!</span>
            </div>
            <div style={{color: group.color}}>
                Inscríbete en las actividades en el mostrador a partir de las 9:00, y a la tarde a partir de las 13:00. ¡{group.despedida}!
            </div>
        </div>
        <div className="activitylist">
            { activities.map((activity, i) => <ActivityCard key={i} activity={activity} />) }
        </div>
    </>
}

export default ActivitiesGroup;

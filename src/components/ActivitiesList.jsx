import ActivitiesGroup from "./ActivitiesGroup";
// agrupacion de actividades por dias, date = dia, month = mes - 1 (base 0), year: año
const groups = [
    { date: 12, month: 7, year: 2022 },
    { date: 13, month: 7, year: 2022 },
    { date: 14, month: 7, year: 2022 },
    { date: 15, month: 7, year: 2022 },
];
const ActivitiesList = ({ activities }) => {
    activities.sort((a,b) => a.Name.localeCompare(b.Name));
    activities.sort((a,b) => new Date(a.ActivityDate) - new Date(b.ActivityDate));
    return groups.map((g, i) => <ActivitiesGroup key={i} activities={
        activities.filter(activity => { 
            const d = new Date(activity.ActivityDate);
            // hack para incluir las actividades del dia siguiente de madrugada
            d.setHours(d.getHours() - 6);
            return d.getDate() === g.date && d.getMonth() === g.month && d.getFullYear() === g.year })
    }/>);
}

export default ActivitiesList;
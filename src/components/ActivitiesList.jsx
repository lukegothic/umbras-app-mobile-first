import ActivitiesGroup from "./ActivitiesGroup";
// agrupacion de actividades por dias, date = dia, month = mes - 1 (base 0), year: año
const groups = [
    { date: 12, month: 7, year: 2022, personaje: "el Mago de Oz ✨", entradilla: "Por fin es", despedida: "Adiosss", color: "#444444", fondo: "#fcffb0" },
    { date: 13, month: 7, year: 2022, personaje: "la Caperucita Roja 🍎", entradilla: "Ha llegado mi", despedida: "Adiosss", color: "#a81b11", fondo: "#ffd6e7" },
    { date: 14, month: 7, year: 2022, personaje: "el Gato con Botas 🗡️", entradilla: "Bienvemiauuu al", despedida: "Adiosss", color: "#0d3e5c", fondo: "#dbdbdb" },
    { date: 15, month: 7, year: 2022, personaje: "la Cenicienta 👑", entradilla: "Feliz", despedida: "Adiosss", color: "#9c0699", fondo: "#ffebf3" },
];
const ActivitiesList = ({ activities }) => {
    activities.sort((a,b) => a.Name.localeCompare(b.Name));
    activities.sort((a,b) => new Date(a.ActivityDate) - new Date(b.ActivityDate));
    return groups.map((g, i) => <ActivitiesGroup group={g} key={i} activities={
        activities.filter(activity => { 
            const d = new Date(activity.ActivityDate);
            // hack para incluir las actividades del dia siguiente de madrugada
            d.setHours(d.getHours() - 6);
            return d.getDate() === g.date && d.getMonth() === g.month && d.getFullYear() === g.year })
    }/>);
}

export default ActivitiesList;

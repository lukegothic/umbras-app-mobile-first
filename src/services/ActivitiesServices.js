const getSummary = (activity, activities) => {
    if (activity.LongSummary || activity.Summary) {
        return activity.LongSummary || activity.Summary;
    } else {
        const activity_static = activities.find(activity_data => activity.Id === activity_data.Id);
        if (activity_static) {
            return activity_static.LongSummary || activity_static.Summary;
        } else {
            return "No hay descripción de la actividad ¡Todavía!";
        }
    }
}
export const getActivities = async() => {
    // servicio live
    const activitiesEndpointPROD = "https://dev.alterparadox.es/index.php?rest_route=/alter-api/v1/GetJsonActividades";
    // archivo estático fallback en caso de estar en dev o si falla el servicio live
    const activitiesDataDEV = "/data/activities.json";
    // comprobar si estamos en entorno de DEV
    const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    // obtener json estático de actividades
    let response = await fetch(activitiesDataDEV);
    let activities = await response.json();
    if (!isDevEnv) { // en pro, obtener datos del endpoint
        response = await fetch(activitiesEndpointPROD);
        const activitiesLive = await response.json();
        // activities es las actividades en vivo y las descripciones 
        if (response.ok) {
            activities = activitiesLive.map(activity => ({
                ...activity,
                LongSummary: getSummary(activity, activities)
            }));
        }
    }
    return activities;
}
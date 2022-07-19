 export const getActivities = async () => {
    //const request = await fetch("https://dev.alterparadox.es/index.php?rest_route=/alter-api/v1/GetJsonActividades");
    const request = await fetch("/data/activities.json");
    const json = request.json();
    return json;
 }
 
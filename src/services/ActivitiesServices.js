export const getActivities = async () => {
   let activitiesEndpoint = "https://dev.alterparadox.es/index.php?rest_route=/alter-api/v1/GetJsonActividades";
   if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      activitiesEndpoint = "/data/activities.json";
   } else {
      // pro
   }
   const request = await fetch(activitiesEndpoint);
   const json = request.json();
   return json;
}

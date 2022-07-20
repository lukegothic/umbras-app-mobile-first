export const getActivities = async () => {
   // servicio live
   const activitiesEndpointPROD = "https://dev.alterparadox.es/index.php?rest_route=/alter-api/v1/GetJsonActividades";
   // archivo estático fallback en caso de estar en dev o si falla el servicio live
   const activitiesDataDEV = "/data/activities.json";
   // comprobar si estamos en entorno de DEV
   const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
   // establecer endpoint en funcion de entorno
   const activitiesEndpoint = isDevEnv ? activitiesDataDEV : activitiesEndpointPROD;
   // obtener datos
   let response = await fetch(activitiesEndpoint);
   // si falla, fallback al archivo estático
   if (!response.ok) {
      response = await fetch(activitiesDataDEV);
   }
   // obtener como json
   const json = response.json();
   return json;
}

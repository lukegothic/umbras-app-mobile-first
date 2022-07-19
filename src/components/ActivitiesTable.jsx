import ActivitiesTableRow from "./ActivitiesTableRow";

const ActivitiesTable = ({ activities }) => {
    return <table>
        <thead>
            <th>Fecha y hora ok</th>
            <th>Dinamiza</th>
            <th>Comentarios</th>
            <th>Duración</th>
            <th>Email</th>
            <th>Id</th>
            <th>LastModify</th>
            <th>Descripción</th>
            <th>Plazas</th>
            <th>Título</th>
            <th>Needs</th>
            <th>Inscritos</th>
            <th>Organizador</th>
            <th>MIN-MAX plazas</th>
            <th>Phone</th>
            <th>Dónde</th>
            <th>Descripción corta</th>
            <th>Tipo de actividad</th>
            <th>Ganador</th>
        </thead>
        <tbody>
            { activities.map((activity, i) => <ActivitiesTableRow key={i} activity={activity} />) }
        </tbody>
    </table>;
}

export default ActivitiesTable;
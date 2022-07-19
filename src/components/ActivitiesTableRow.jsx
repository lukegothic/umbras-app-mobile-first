const ActivitiesTableRow = ({ activity }) => {
    return <tr>
        <td>{ new Date(activity.ActivityDate).toLocaleString('es-ES', {hour12: false}) }</td>
        <td>{ activity.Association }</td>
        <td>{ activity.Comments }</td>
        <td>{ activity.Duration }</td>
        <td>{ activity.Email }</td>
        <td>{ activity.Id }</td>
        <td>{ activity.LastModify }</td>
        <td>{ activity.LongSummary }</td>
        <td>{ activity.MaxParticipants }</td>
        <td>{ activity.Name }</td>
        <td>{ activity.Needs }</td>
        <td>{ activity.NumParticipants }</td>
        <td>{ activity.Organizer }</td>
        <td>{ activity.Participants }</td>
        <td>{ activity.Phone }</td>
        <td>{ activity.Place }</td>
        <td>{ activity.Summary }</td>
        <td>{ activity.Type }</td>
        <td>{ activity.Winner }</td>
    </tr>;
}

export default ActivitiesTableRow;
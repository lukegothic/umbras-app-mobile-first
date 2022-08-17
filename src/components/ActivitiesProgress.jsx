export const ActivitiesProgress = ({numParticipants, maxParticipants}) => {
    return (
    <div style={{ position:"relative", width: "100%" }}>
        <progress className="progress-bar" value={numParticipants} max={maxParticipants}></progress>
        <span className="progress-label">{numParticipants} de {maxParticipants} inscritos</span>
    </div>);
}
export default ActivitiesProgress;
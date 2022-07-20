import ActivityCard from "./ActivityCard";

const ActivitiesGroup = ({ activities }) => {
    return <div className="activitylist">
        { activities.map((activity, i) => <ActivityCard key={i} activity={activity} />) }
    </div>;
}

export default ActivitiesGroup;
import ActivityCard from "./ActivityCard";

const ActivitiesList = ({ activities }) => {
    // viene ordenado ya
    // activities.sort((a,b) => new Date(a.ActivityDate) > new Date(b.ActivityDate));
    return <div className="activitylist">
        { activities.map((activity, i) => <ActivityCard key={i} activity={activity} />) }
    </div>;
}

export default ActivitiesList;
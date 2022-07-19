import ActivityCard from "./ActivityCard";

const ActivitiesList = ({ activities }) => {
    //activities.sort((a,b) => new Date(a.ActivityDate) > new Date(b.ActivityDate));
    return <div className="activitylist">
        { activities.map((activity, i) => <ActivityCard key={i} activity={activity} theme={ i % 2 === 0 ? "even" : "odd" } />) }
    </div>;
}

export default ActivitiesList;
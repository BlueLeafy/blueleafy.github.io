// components/ActivitiesFeed/ActivitiesFeed.jsx
import Card from "../../Utils/Card";
import ActivityItem from "./ActivityItem";

function ActivitiesFeed({ ...props }) {
    return (
        <Card {...props} elevated>
            <ActivityItem />
        </Card>
    );
};

export default ActivitiesFeed;
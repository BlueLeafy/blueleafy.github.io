// component/Dashboard/StatsGrid/StatsCard.jsx - resuable data pass down throught props form parent
import Card from "../../Utils/Card"

function StatsCard({...props}) {
    return (
        <Card {...props} elevated>
            Stats Card
        </Card>
    );
};

export default StatsCard;
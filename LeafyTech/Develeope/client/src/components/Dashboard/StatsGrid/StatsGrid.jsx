// components/Dashbaord/StatsGrid.jsx - general stats
// porps: user - products - activites
import StatsCard from "./StatsCard"

function StatsGrid({...props}) {
    return (
        <div {...props}>
            <StatsCard  />
            <StatsCard />
            <StatsCard />
        </div>
    );
};

export default StatsGrid;
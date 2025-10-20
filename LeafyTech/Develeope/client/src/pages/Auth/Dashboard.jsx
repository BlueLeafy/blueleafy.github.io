// Auth/Dashboard.jsx
import { DashboardHeader, StatsGrid, ActivitiesFeed, QuickActions, MediaLibraryStats } from "../../components/Dashboard";
// What other infos should I show???

function Dashboard() {
    return (
        <div className="w-full h-full">
            {/* HEADER */}
            <DashboardHeader />
            {/* Grid container */}
            <div className="grid grid-cols-12 gap-4 w-full">
                <QuickActions className="col-span-6" />
                <StatsGrid className="col-span-6" />
                <ActivitiesFeed className="col-span-12" />
                <MediaLibraryStats className="col-span-full" />
            </div>
        </div>

    );
};

export default Dashboard;
// components/Dashboard/DashboardHeader.jsx
// props: user
function DashboardHeader() {
    const date = new Date();
    const today = date.getDate();

    return (
        <div>
            <header>
                <h1>Welcome (username)!</h1>
                <p>here is what's happening today</p>
                <p>{today}</p>
            </header>
        </div>
    );
};

export default DashboardHeader;
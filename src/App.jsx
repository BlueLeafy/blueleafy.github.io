import Dashboard from "./pages/Dashboard";
import Button from "./components/Button";
import Link from "./components/Link";
import Route from "./components/Route";
import AddHabitPage from "./pages/AddHabitPage";

function App() {
    return (
        <div className="w-screen bg-neutral-100 h-screen">
            <div className="px-3 py-1.5 bg-neutral-200 flex flex-row justify-between items-center">
                <h1 className="text-neutral-800 font-bold text-4xl">Habit Tracker</h1>
                <Link to="/create-new-habit">
                    <Button secondary>Add Habit</Button>
                </Link>
            </div>
            <div className="px-3 py-8">
                <Route path="/create-new-habit">
                    <AddHabitPage />
                </Route>

                <Route path="/">
                    <Dashboard />
                </Route>
            </div>
        </div>
    );
};

export default App;
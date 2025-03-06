import AddHabit from "../components/AddHabit";
import Link from "../components/Link";

function AddHabitPage() {

    return (
        <div className="flex flex-col items-center mx-auto min-w-3xl max-w-3xl px-20">
            <AddHabit />
            <div className="self-end mt-4">
                <Link to='/'>
                    <a className="cursor-pointer">Back to home page</a>
                </Link>
            </div>
        </div>
    )
};

export default AddHabitPage;
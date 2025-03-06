import { useFetchHabitsQuery, useCompleteHabitMutation } from "../store/apis/habitsApi";
import HabitCard from "./HabitCard";

function HabitItem() {
    const { data: habits, isLoading, isError } = useFetchHabitsQuery();
    const [completeHabit, { isLoading: isCompleting, isError: isCompleteError }] = useCompleteHabitMutation();

    // Handle loading and error states
    if (isLoading) return <p>Loading habits...</p>;
    if (isError) return <p className="text-red-800">Error loading habits...</p>;
    if (!habits || habits.length === 0) return <p className="text-gray-500">No habits added yet.</p>;

    // Handle habit count increment and completion
    const handleCountAndCompletion = async (habit) => {
        // Prepare updated data to increment count and mark as completed today
        const updatedData = {
            current_count: habit.current_count + 1, // Increment the count
            completed_today: true, // Mark the habit as completed today
        };

        try {
            // Trigger mutation to update habit
            await completeHabit({ id: habit.id, updatedData }).unwrap();
        } catch (error) {
            console.error("Error updating habit:", error);
        }
    };

    // Render habits
    const renderedHabits = habits.map((habit) => {
        // Card size in base at priority given
        const { rowSpan, colSpan } = habit.priority === "high" ? { rowSpan: 2, colSpan: 2 } : { rowSpan: 1, colSpan: 1 };

        return (
            <HabitCard
                key={habit.id}
                habit={habit}
                rowSpan={rowSpan}
                colSpan={colSpan}
                onClick={() => handleCountAndCompletion(habit)}
            />
        );
    });

    return (
        <>
            {renderedHabits}
        </>
    );
}

export default HabitItem;
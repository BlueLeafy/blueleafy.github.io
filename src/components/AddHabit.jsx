import Button from "./Button";
import { nanoid } from "@reduxjs/toolkit";
import { useAddHabitMutation } from "../store/apis/habitsApi";
import { useState } from "react";
import ColorSelect from "./ColorSelect";
import PrioritySelect from "./PrioritySelect";

function AddHabit() {
    const initialHabitState = {
        name: '',
        description: '',
        goal: 1,
        color: "blue"
    }

    const [habit, setHabit] = useState(initialHabitState);
    const [addHabit] = useAddHabitMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHabit((prev) => ({
            ...prev,
            [name]: name === "goal" ? parseInt(value) : value, // convert goal to number
        }));
    };

    const handleAddHabit = async (e) => {
        e.preventDefault();
        await addHabit({ ...habit, id: nanoid() });
        setHabit(initialHabitState); // Reset form when submitted
    };

    return (
            <div className="pt-15 flex-col border-2 shadow-neutral-200 border-neutral-200 min-h-full rounded-4xl">
                <h1 className="text-4xl mb-6 font-bold px-20">Lets be active </h1>
                <form onSubmit={handleAddHabit}>
                    <div className="mb-6 px-20">
                        <label className="font-semibold">Habit name</label>
                        <input
                            name="name"
                            value={habit.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Less coffee intake"
                            className="p-2 mt-1.5 border-2 w-full bg-neutral-200 border-neutral-300 shadow rounded"
                        />
                    </div>
                    <div className="mb-6 px-20">
                        <label className="font-semibold">Description</label>
                        <input
                            name="description"
                            value={habit.description}
                            onChange={handleChange}
                            type="text"
                            placeholder="Less intake..."
                            className="p-2 mt-1.5 border-2 w-full bg-neutral-200 border-neutral-300 shadow rounded"
                        />
                    </div>
                    <div className="mb-6 px-20">
                        <label className="font-semibold">Goals per day</label>
                        {/* select options or number */}
                        <input
                            name="goal"
                            value={habit.goal}
                            onChange={handleChange}
                            type="number"
                            min="1"
                            placeholder="Goal per day"
                            className="p-2 mt-1.5 border-2 w-full bg-neutral-200 border-neutral-300 shadow rounded"
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-8 px-20">
                        <div className="flex-1">
                            <label className="font-semibold mr-1.5 mb-1.5">Priority</label>
                            <PrioritySelect value={habit.priority} onChange={handleChange} />
                        </div>
                        <div className="flex-1">
                            <label className="font-semibold mr-1.5 mb-1.5">Color habit</label>
                            <ColorSelect value={habit.color} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-6 gap-4 bg-neutral-200 px-20 pt-10 pb-10 rounded-b-4xl">
                        <Button primary rounded type="submit">
                            Create
                        </Button>
                        <Button outline rounded type="button" onClick={() => setHabit(initialHabitState)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
    );
};

export default AddHabit;
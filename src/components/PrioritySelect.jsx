function PrioritySelect({ value, onChange }) {
    const priorities = [
        { value: "low" },
        { value: "medium" },
        { value: "high" },
    ];

    const renderedPriorityOptions = priorities.map((priority) => {
        return (
            <option key={priority.value} value={priority.value}>
                {priority.value}
            </option>
        );
    });

    return (
        <select
            name="priority"
            value={value}
            onChange={onChange}
            className="p-2 border-2 bg-neutral-200 border-neutral-300 shadow rounded capitalize w-full"
        >
            {renderedPriorityOptions}
        </select>
    );
};

export default PrioritySelect;
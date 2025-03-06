function HabitCard({ habit, rowSpan, colSpan, onClick }) {
    return (
        <div
            className={`min-w-[250px] cursor-pointer rounded-2xl p-6 text-black 
                ${rowSpan ? `row-span-${rowSpan}` : ''} ${colSpan ? `col-span-${colSpan}` : ''}
                shadow shadow-neutral-200
                `}
            onClick={onClick}
            style={{ background: `${habit.color}` }}
        >
                <div className="flex flex-row justify-between items-center gap-5 text-4xl font-bold capitalize h-full">
                    <h2>{habit.name}</h2>
                    <p>{habit.current_count} / {habit.goal}</p>
                </div>
        </div>
    );
}

export default HabitCard;


// size and color remain unchanged once assignet to it
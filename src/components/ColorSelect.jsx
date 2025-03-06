function ColorSelect({ value, onChange }) {
    const colorsHabit = [
        { value: "#D1E9F6" },
        { value: "#EECAD5" },
        { value: "#F6EACB" },
        { value: "#B1AFFF" },
        { value: "#F1D3CE" },
        { value: "#D7E5CA" },

    ]

    const renderedColorOption = colorsHabit.map((color) => {
        return (
            <label key={color.value}>
                <input
                    type="radio"
                    name="color"
                    checked={value === color.value}
                    onChange={() => onChange({target: {name: "color", value: color.value}})}
                    value={color.value}
                    style={{display: "none"}}
                />

                <span
                    style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "15px",
                        background: `${color.value}`,
                        display: "inline-block",
                        borderRadius: "50%",
                        border: value === color.value ? "3px solid gray" : "2px solid #eeeeee"
                    }}
                />
            </label>
        );
    });


    return (
        <div> {/* this will update the "habit.color" in hte parent component */}
            {renderedColorOption}
        </div>
    )
}

export default ColorSelect;

// when color is like yellow text goes black and viceversa
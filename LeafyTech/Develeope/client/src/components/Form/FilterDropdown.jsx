// Form/FilterDropdown.jsx
import { FormSelectRow } from "./";
import Button from "../Utils/Button";
import Card from "../Utils/Card";
import { useState } from "react";

function FilterDropdown({
    filters = [], // Array of ilter config
    labelText = "Filters",
    className = '',
    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={className} {...props}>
            <Button type="button" onClick={handleClick} text>
                <p>{labelText}</p>
            </Button>
            {isOpen && (
                <>

                    <div className="filter-dropdown-row-items">
                        {filters.length > 0 ? (
                            filters.map((filter, index) => (
                                <FormSelectRow
                                    key={filter.name || index}
                                    name={filter.name}
                                    id={filter.id || filter.name}
                                    options={filter.options}
                                    placeholder={filter.placeholder}
                                    defaultValue={filter.defaultValue}
                                    labelText={filter.labelText}
                                    className={filter.className}
                                />
                            ))
                        ) : (
                            <FormSelectRow
                                name="default-filter"
                                id="default-filter"
                                options={[]}
                                placeholder="No filters available"
                                disabled
                            />
                        )}
                    </div>

                </>
            )
            }
        </div >
    );
};
export default FilterDropdown;
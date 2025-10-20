// Form/FilterDropdown.jsx
import { FormSelectRow } from "./";
import Button from "../Utils/Button";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function FilterDropdown({
    filters = [], // Array of filter config
    labelText = "Filters",
    className = '',
    onChange,
    onClearFilters,
    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [searchParams] = useSearchParams();

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Handle inidividual filter changes
    const handleFilterChange = (e) => {
        // Call parent onChange but KEEP the dropdown open
        if (onChange) {
            onChange(e);
        }

        // DO not close dropdown or reset anything
    };

    // Clode dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Get current values from URL
    const getCurrentValue = (filterName) => {
        return searchParams.get(filterName) || '';
    };

    // Check if any filters are active
    const hasActiveFilters = filters.some(filter =>
        searchParams.get(filter.name) && searchParams.get(filter.name) !== ''
    );

    // handle clear all filters
    const handleClearFilters = () => {
        if (onClearFilters) {
            onClearFilters(); // This should call the clearAllFilters from useFilters hook
        }
    };

    return (
        <div className={`${className} items-center`} {...props}>
            <Button type="button" onClick={handleClick} text className="text-nowrap">
                {!isOpen ? (<p>{labelText}</p>) : (<p>Close filters</p>)}
            </Button>
            {isOpen && (
                <div className="filter-dropdown-row-items items-center">
                    {filters.length > 0 ? (
                        <>
                            {filters.map((filter, index) => (
                                <div key={filter.name || index}>
                                    <FormSelectRow
                                        name={filter.name}
                                        id={filter.id || filter.name}
                                        options={filter.options}
                                        placeholder={filter.placeholder}
                                        value={getCurrentValue(filter.name)}
                                        labelText={filter.labelText}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                            ))}
                            {hasActiveFilters && (
                                <div>
                                    <Button
                                        secondary
                                        onClick={handleClearFilters}
                                    >
                                        Clear all filters
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div>
                            No filter availblae
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default FilterDropdown;
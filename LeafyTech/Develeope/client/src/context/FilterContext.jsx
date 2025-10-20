// context/FilterContext.jsx - data filtering, search, sorting
import { createContext, useState, useEffect } from "react";

const FilterContext = createContext();

export const FitlerProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        brand: '', // Single selection
        company: '', // Single selection
        applications: [], // Multiple selection
        parameters: [], // Multiple selection
        sortBy: "name",
        sortOrder: "asc",
        status: "all",
        // any others???
    });

    const [activeFilters, setActiveFilters] = useState({});

    // Update active filters whenever filters change
    useEffect(() => {
        const active = {};
        if (filters.brand) active.brand = filters.brand;
        if (filters.company) active.company = filters.company;
        if (filters.applications.length > 0) active.applications = filters.applications;
        if (filters.parameters.length > 0) active.parameters = filters.parameters;
        if (filters.sortBy !== "name") active.sortBy = filters.sortBy;
        if (filters.status !== "all") active.status = filters.status;

        setActiveFilters(active);
    }, [filters]);

    // Single selection updates
    const updateFilters = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    // For multi-selection applications
    const addApplication = (application) => {
        setFilters(prev => ({
            ...prev,
            applications: [...prev.applications, application]
        }));
    };


    const removeApplication = (applicationToRemove) => {
        setFilters(prev => ({
            ...prev,
            applications: prev.applications.filter(app => app !== applicationToRemove)
        }));
    };

    // Multi selection parameters
    const addParameter = (parameter) => {
        setFilters(prev => ({
            ...prev,
            parameters: [...prev.parameters, parameter]
        }));
    };

    const removeParameter = (parameterToRemove) => {
        setFilters(prev => ({
            ...prev,
            parameters: prev.parameters.filter(param => param !== parameterToRemove)
        }));
    };


    const clearFilter = (filterType) => {
        setFilters(prev => {
            const defaultValues = {
                brand: '',
                company: '',
                applications: [],
                parameters: [],
                sortBy: "name",
                sortOrder: "asc",
                status: "all",
            }

            return {
                ...prev,
                [filterType]: defaultValues[filterType]
            };
        });
    };

    const clearAllFilters = () => {
        setFilters({
            brand: '',
            company: '',
            applications: [],
            parameters: [],
            sortBy: "name",
            sortOrder: "asc",
            status: "all",
        });
    };

    const hasActiveFilters = Object.keys(activeFilters).length > 0;

    const value = {
        filters,
        activeFilters,
        updateFilters,
        addApplication,
        removeApplication,
        addParameter,
        removeParameter,
        clearFilter,
        clearAllFilters,
        hasActiveFilters
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;
// utils/filterHelpers.js

// ===== UTILITY FUNCTIONS =====
const safeString = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value.trim();
    return String(value).trim();
};

const safeLocaleCompare = (a, b) => {
    try {
        const strA = safeString(a);
        const strB = safeString(b);
        return strA.localeCompare(strB);
    } catch (error) {
        // Fallback to basic string comparison
        console.error(error);
        
        return String(a || '').localeCompare(String(b || ''));
    }
};

const getUniqueValues = (array, fieldName) => {
    if (!Array.isArray(array)) return [];
    
    const values = array
        .map(item => {
            const value = item?.[fieldName];
            return value != null ? safeString(value) : null;
        })
        .filter(value => value != null && value !== '')
        .filter((value, index, self) => self.indexOf(value) === index);
    
    return values.sort(safeLocaleCompare);
};

// ===== FILTERS =======
export const generateFilterOptions = (allProducts, additionalFilters = {}) => {
    if (!allProducts || !Array.isArray(allProducts) || allProducts.length === 0) {
        return {
            companyOptions: [{ value: '', label: "Loading..." }],
            applicationsOptions: [{ value: '', label: "Loading..." }],
            parametersOptions: [{ value: '', label: "Loading..." }],
            ...additionalFilters
        };
    }

    try {
        // Company options
        const companyValues = getUniqueValues(allProducts, 'company');
        const companyOptions = [
            { value: '', label: "All Companies" },
            ...companyValues.map(company => ({ 
                value: company, 
                label: company 
            }))
        ];

        // Applications options
        const applicationsValues = getUniqueValues(allProducts, 'applications');
        const applicationsOptions = [
            { value: '', label: "All Applications" },
            ...applicationsValues.map(app => ({ 
                value: app, 
                label: app 
            }))
        ];

        // Parameters options
        const parametersValues = getUniqueValues(allProducts, 'parameters');
        const parametersOptions = [
            { value: '', label: "All Parameters" },
            ...parametersValues.map(param => ({ 
                value: param, 
                label: param 
            }))
        ];

        return { 
            companyOptions, 
            applicationsOptions, 
            parametersOptions,
            ...additionalFilters 
        };
    } catch (error) {
        console.error('Error generating filter options:', error);
        return {
            companyOptions: [{ value: '', label: "Error loading..." }],
            applicationsOptions: [{ value: '', label: "Error loading..." }],
            parametersOptions: [{ value: '', label: "Error loading..." }],
            ...additionalFilters
        };
    }
};

export const createFilterConfigs = (options, currentValues = {}, customFilters = []) => {
    const baseFilters = [
        {
            name: "company",
            options: options.companyOptions || [],
            defaultValue: safeString(currentValues.company) || '',
            labelText: "",
            placeholder: "Select Company"
        },
        {
            name: "applications",
            options: options.applicationsOptions || [],
            defaultValue: safeString(currentValues.applications) || '',
            labelText: "",
            placeholder: "Select Application"
        },
        {
            name: "parameters",
            options: options.parametersOptions || [],
            defaultValue: safeString(currentValues.parameters) || '',
            labelText: "",
            placeholder: "Select Parameter"
        }
    ];

    return [...baseFilters, ...customFilters];
};

// Helper to get all available filter values from products
export const getAvailableFilterValues = (allProducts) => {
    if (!allProducts || !Array.isArray(allProducts)) {
        return { companies: [], applications: [], parameters: [] };
    }

    try {
        const companies = getUniqueValues(allProducts, 'company');
        const applications = getUniqueValues(allProducts, 'applications');
        const parameters = getUniqueValues(allProducts, 'parameters');

        return { companies, applications, parameters };
    } catch (error) {
        console.error('Error getting available filter values:', error);
        return { companies: [], applications: [], parameters: [] };
    }
};

// ==== SORTING =====
export const getSortOptions = (customSortOptions = []) => {
    const baseSortOptions = [
        { value: "a-z", label: "Name A-Z" },
        { value: "z-a", label: "Name Z-A" },
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
    ];

    return [...baseSortOptions, ...customSortOptions];
};

export const getSortConfig = (currentSort = "a-z", customOptions = []) => ({
    name: "sort",
    options: getSortOptions(customOptions),
    defaultValue: safeString(currentSort) || "a-z",
    labelText: '',
    placeholder: "Sort by"
});

export const getBackendSortKey = (frontendSort) => {
    const sortMap = {
        "a-z": "position",
        "z-a": "-position",
        "newest": "-createdAt",
        "oldest": "createdAt"
    };

    const safeSort = safeString(frontendSort);
    return sortMap[safeSort] || "position";
};

// ==== FILTER VALIDATION ====
export const shouldApplyFilter = (filterValue) => {
    const value = safeString(filterValue);
    return value && value !== "all";
};

// ==== ACTIVE FILTERS ====
export const hasActiveFilters = (currentValues = {}) => {
    const filterNames = ['company', 'applications', 'parameters'];
    return filterNames.some(name => 
        shouldApplyFilter(currentValues[name])
    );
};

export const getActiveFiltersCount = (currentValues = {}) => {
    const filterNames = ['company', 'applications', 'parameters'];
    return filterNames.filter(name => 
        shouldApplyFilter(currentValues[name])
    ).length;
};

export const getActiveFiltersLabels = (currentValues = {}, options = {}) => {
    const activeFilters = [];
    
    try {
        if (shouldApplyFilter(currentValues.company) && Array.isArray(options.companyOptions)) {
            const company = options.companyOptions.find(opt => 
                safeString(opt.value) === safeString(currentValues.company)
            );
            if (company) activeFilters.push(`Company: ${company.label}`);
        }
        
        if (shouldApplyFilter(currentValues.applications) && Array.isArray(options.applicationsOptions)) {
            const app = options.applicationsOptions.find(opt => 
                safeString(opt.value) === safeString(currentValues.applications)
            );
            if (app) activeFilters.push(`Application: ${app.label}`);
        }
        
        if (shouldApplyFilter(currentValues.parameters) && Array.isArray(options.parametersOptions)) {
            const param = options.parametersOptions.find(opt => 
                safeString(opt.value) === safeString(currentValues.parameters)
            );
            if (param) activeFilters.push(`Parameter: ${param.label}`);
        }
    } catch (error) {
        console.error('Error getting active filter labels:', error);
    }
    
    return activeFilters;
};

// ==== QUERY PARAMETERS ====
export const buildQueryParams = (filters = {}, sort = '', search = '', page = 1) => {
    const params = new URLSearchParams();
    
    try {
        // Add filters
        if (shouldApplyFilter(filters.company)) {
            params.append('company', safeString(filters.company));
        }
        
        if (shouldApplyFilter(filters.applications)) {
            params.append('applications', safeString(filters.applications));
        }
        
        if (shouldApplyFilter(filters.parameters)) {
            params.append('parameters', safeString(filters.parameters));
        }
        
        // Add sort (only if not default)
        const safeSort = safeString(sort);
        if (safeSort && safeSort !== 'a-z') {
            params.append('sort', safeSort);
        }
        
        // Add search
        const safeSearch = safeString(search);
        if (safeSearch) {
            params.append('search', safeSearch);
        }
        
        // Add pagination
        const pageNum = Number(page) || 1;
        if (pageNum > 1) {
            params.append('page', pageNum.toString());
        }
    } catch (error) {
        console.error('Error building query params:', error);
    }
    
    return params.toString();
};

// ==== PRESET CONFIGURATIONS ====
export const getProductFilterConfig = (allProducts, currentValues = {}) => {
    try {
        const options = generateFilterOptions(allProducts);
        const filters = createFilterConfigs(options, currentValues);
        const sort = getSortConfig(currentValues.sort);
        
        const hasActive = hasActiveFilters(currentValues);
        const activeCount = getActiveFiltersCount(currentValues);
        const activeLabels = getActiveFiltersLabels(currentValues, options);
        
        return { 
            filters, 
            sort, 
            options,
            hasActiveFilters: hasActive,
            activeFiltersCount: activeCount,
            activeFiltersLabels: activeLabels
        };
    } catch (error) {
        console.error('Error getting product filter config:', error);
        return {
            filters: [],
            sort: getSortConfig(),
            options: generateFilterOptions([]),
            hasActiveFilters: false,
            activeFiltersCount: 0,
            activeFiltersLabels: []
        };
    }
};

// ==== DEFAULT EXPORT ====
export default {
    generateFilterOptions,
    createFilterConfigs,
    getAvailableFilterValues,
    getSortOptions,
    getSortConfig,
    getBackendSortKey,
    shouldApplyFilter,
    hasActiveFilters,
    getActiveFiltersCount,
    getActiveFiltersLabels,
    buildQueryParams,
    getProductFilterConfig,
    
    // Utility functions (can be used externally if needed)
    safeString,
    safeLocaleCompare,
    getUniqueValues
};
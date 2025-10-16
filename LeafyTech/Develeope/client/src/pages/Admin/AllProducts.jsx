// AllProducts.jsx
import ProductsListItem from "../../components/Products/Admin/ProductsListItem";
import { useLoaderData, useSearchParams, useSubmit } from "react-router-dom";
import { FormRow, FilterDropdown } from "../../components/Form/";
import { useEffect, useState } from "react";

function AllProducts() {
    const { products, searchValue } = useLoaderData(); // This gets data form customLoaders
    const [searchParams] = useSearchParams();
    const submit = useSubmit();
    
    // Get current search value from URL params
    const currentSearch = searchParams.get("search") || "";

    // Params for filters
    // Company
    const companyOptions = products && products.length > 0
        ? [
            { value: '', label: "All Companies" },
            ...products.map(product => ({
                value: product.company,
                label: product.company
            })).filter((option, index, self) =>
                self.findIndex(o => o.value === option.value) === index
            ) // Remove duplicates
        ]
        : [{ value: "", label: "Loading..." }];

    // applications
    const applicationsOptions = products && products.length > 0
        ? [
            { value: '', label: "All Applications" },
            ...products.map(product => ({
                value: product.applications,
                label: product.applications
            })).filter((option, index, self) =>
                self.findIndex(o => o.value === option.value) === index
            ) // Remove duplicates
        ]
        : [{ value: "", label: "Loading..." }];

    // Multiple filter version are store the options and then passed as props 'filters'
    const multipleFilters = [
        { name: "company", options: companyOptions },
        { name: "applications", options: applicationsOptions }
    ];

    // Debounce for search
    const [searchInput, setSearchInput] = useState(currentSearch);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchInput !== currentSearch) {
                const formData = new FormData();
                
                // Copy all existing params except search
                searchParams.forEach((value, key) => {
                    if (key !== "search") {
                        formData.append(key, value);
                    }
                });
                
                // Add search if not empty
                if (searchInput.trim()) {
                    formData.append("search", searchInput.trim());
                }
                
                submit(formData);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchInput, currentSearch, searchParams, submit]);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Handle filter changes
    const handleFilterChange = (e) => {
        submit(e.currentTarget.form);
    };

    return (
        <div className="mb-5 flex flex-col space-y-5 container mx-auto items-center px-5 lg:px-0">
            {/* Search and filter the list */}
            <div className="bg-neutral-50 w-full">
                <form method="get" className="flex flex-row items-center justify-between gap-x-2.5 px-5">
                    <FilterDropdown
                        filters={multipleFilters}
                        labelText="Filters..."
                        className="filter-dropdown-row w-1/2"
                        onChange={handleFilterChange}
                    />
                    <FormRow 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Search..." 
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            {/* Complete List */}
            {/* filter result at product list */}
            <>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <ProductsListItem product={product} key={product._id || product.id} />
                    ))
                ) : (<p>No product</p>)}
            </>
        </div>
    );
};

export default AllProducts;
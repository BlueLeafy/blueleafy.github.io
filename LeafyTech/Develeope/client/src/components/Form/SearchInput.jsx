// components/Form/SearchInput.jsx
import { useSearch } from "../../hooks/useSearch";

function SearchInput({
    placeholder = "Search...",
    delay = 500,
    className = '',
    ...props
}) {
    const { searchInput, handleSearchChange } = useSearch(delay);

    return (
        <input
            type="search"
            name="search"
            placeholder={placeholder}
            value={searchInput}
            onChange={handleSearchChange}
            className={`${className} `}
            {...props}
        />
    );
};

export default SearchInput;
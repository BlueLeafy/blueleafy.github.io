// contaxt/SearchContext.jsx - Global search state
import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const updateSearchQuery = (query) => {
        setSearchQuery(query);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    const value = {
        searchQuery,
        searchResults,
        isSearching,
        setIsSearching,
        updateSearchQuery,
        setSearchResults,
        clearSearch
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
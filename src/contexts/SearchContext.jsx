import { createContext, useContext, useState } from "react";

// 1- Creaiamo il contesto
const SearchContext = createContext();


// 2 - Definiamo un custom Provider
function SearchProvider({ children }) {

    const value = {};
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

// 3 - Definiamo un hook per consumare il contesto
function useSearch() {
    const context = useContext(SearchContext);
    return context;
}

// 4 - Esportiamo il nostro provider ed il nostro hook
export { SearchProvider, useSearch }
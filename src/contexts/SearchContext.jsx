import { createContext, useContext, useState, useEffect } from "react";

// 1- Creaiamo il contesto
const SearchContext = createContext();


// 2 - Definiamo un custom Provider
function SearchProvider({ children }) {
    const [products, setProducts] = useState([]);
    // 1 - leggere onChange, 2 - variabile di stato per la value, 3 - filtro dei dati
    const [searchProduct, setSearchProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);


    function apiCallProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(function (result) { return result.json() })
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
    }
    useEffect(apiCallProducts, []);

    function onSearchForm(e) {
        e.preventDefault();
        console.log('on search')

        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchProduct.toLowerCase()));
        setFilteredProducts(filteredProducts)
    }

    const value = {
        searchProduct,
        setSearchProduct,
        onSearchForm,
        filteredProducts
    };
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
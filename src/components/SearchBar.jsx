import { useSearch } from "../contexts/SearchContext"

export default function SearchBar() {
    const { searchProduct, setSearchProduct, onSearchForm } = useSearch();

    return (
        <form className="search-bar" onSubmit={onSearchForm}>
            <input
                type="text"
                placeholder="Cerca prodotti..."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
            />
            <input type="submit" value="Cerca" />
        </form>
    )
}
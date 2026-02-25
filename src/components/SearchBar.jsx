import { useSearch } from "../contexts/SearchContext"

export default function SearchBar() {
    const { searchProduct, setSearchProduct, onSearchForm } = useSearch();

    return (
        <form className="d-flex" role="search" onSubmit={onSearchForm}>
            <input className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
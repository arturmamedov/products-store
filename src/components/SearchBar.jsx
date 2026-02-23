export default function SearchBar({ searchProduct, setSearchProduct, onSearchForm }) {
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
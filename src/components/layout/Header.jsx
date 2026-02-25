import SearchBar from "../SearchBar";

export default function Header({ searchProduct, setSearchProduct, onSearchForm }) {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', position: 'fixed', top: 0, left: 0, right: 0, padding: '.5rem 1rem' }} className="header">
            <div>
                [logo]
            </div>

            <div>
                <SearchBar searchProduct={searchProduct} setSearchProduct={setSearchProduct} onSearchForm={onSearchForm} />
            </div>
        </header>
    )
}
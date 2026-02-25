import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/layout/Header';
import { useSearch } from './contexts/SearchContext';

function App() {
  const { filteredProducts } = useSearch();

  return (
    <>
      <Header />


      <div className="container py-5">
        <div className="row justify-content-start g-4">
          {filteredProducts.length != 0 ? filteredProducts.map((product) => {
            return (
              <div key={product.id} className="col-6 col-lg-4">
                <ProductCard product={product} />
              </div>
            )
          }) : 'Nessun prodotto trovato'}
        </div>
      </div>
    </>
  )
}

export default App

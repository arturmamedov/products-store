import './App.css'
import ProductCard from './components/ProductCard';
import Header from './components/layout/Header';
import { useSearch } from './contexts/SearchContext';

function App() {
  const { filteredProducts } = useSearch();

  return (
    <>
      <Header />

      {filteredProducts.length != 0 ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : 'Nessun prodotto trovato'}
    </>
  )
}

export default App

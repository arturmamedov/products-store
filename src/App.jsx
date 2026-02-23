import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
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

  return (
    <>
      <SearchBar searchProduct={searchProduct} setSearchProduct={setSearchProduct} onSearchForm={onSearchForm} />

      {filteredProducts.length != 0 ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : 'Nessun prodotto trovato'}
    </>
  )
}

export default App

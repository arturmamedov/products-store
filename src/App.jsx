import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  let [products, setProducts] = useState([]);

  console.log('app')

  function apiCallProducts() {
    console.log('useEffect')

    fetch('https://fakestoreapi.com/products')
      .then(function (result) { return result.json() })
      .then(data => {
        console.log(data)
        setProducts(data);
      })
  }

  useEffect(apiCallProducts, []);


  return (
    <>
      {products.map((product) => <ProductCard product={product} />)}
    </>
  )
}

export default App

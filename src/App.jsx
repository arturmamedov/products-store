import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  function apiCallProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(function (result) { return result.json() })
      .then(products => {
        console.log(products)
        setProducts(products);
      })
  }

  useEffect(apiCallProducts, []);


  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>{product.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App

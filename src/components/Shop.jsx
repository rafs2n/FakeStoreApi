import React from 'react';
import {useState, useEffect} from 'react';
import './Shop.css';
import Products from './Products';
import Header from './Header';
import Cart from './Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch ('https://fakestoreapi.com/products')
      .then (res => res.json())
      .then (data => setProducts(data))
      .catch(error => console.log(error))
  }, [])

    // const first10 = fakeData.slice(0,12);
    // const [products, setProducts] = useState(first10)

    const [cart, setCart]= useState([]);

    const handleAddproduct = (product) => {
      console.log('Product Added', product);
      const newCart = [...cart, product];
      setCart(newCart);
    }

    const handleShowCart = () => {
      console.log('Cart Shown');
    }
    
  
    return (
      <div className="container">
          <Header 
          cart ={cart}
          handleShowCart = {handleShowCart}
          ></Header>
        <div className="product-container">
            {
              products.map(productItem => <Products 
                handleAddproduct = {handleAddproduct}
                product = {productItem}></Products>)
            }
        </div>
      </div>
    )
}

export default Shop;
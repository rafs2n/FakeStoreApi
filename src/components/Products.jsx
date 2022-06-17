import React from 'react'
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
  const {image, title, price} = props.product;
  return (
    <div className="product-card">
      <img className='img' src={image} alt="" />
      <h4 className='title'>{title}</h4>
      <div className="bottom">
        <div className="price">
          <strong>{price}</strong>
        </div>
        <div className='btn'>
          <button onClick={() => props.handleAddproduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Products;
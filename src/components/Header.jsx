import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import Logo from '../img/logo.png';


const Header = (props) => {
  const cart = props.cart.length;
  return (
    <div className='container'>
      <div className="header">
        <div className='logo'>
          <a href="/home"><img src={Logo} alt="logo"/></a>
        </div>
        <div className="cart">
          <button onClick={props.handleShowCart}><FontAwesomeIcon icon={faShoppingCart}/> <span>{cart}</span></button>
          
        </div>
      </div>
    </div>
  )
}

export default Header
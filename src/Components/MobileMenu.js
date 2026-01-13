import React from "react";

const MobileMenu = ({onClose, cartCount}) => {
  
    return(
    <div className="mobileMenu">
      <div className="closeButton">
        <button onClick={onClose}>
          <img src="/image/close.svg"/>
        </button>
      </div>

        <div className="menuCenter">
          <nav className="nav-mobile">
            <a href='#home' onClick = {onClose}>HOME</a>
            <a href='#products' onClick = {onClose}>PRODUCTS</a>
            <a href='#about' onClick = {onClose}>ABOUT</a>
            <a href='#contact' onClick = {onClose}>CONTACT</a>
          </nav>

          <button className="cart-button-mobile" >
            CART 
            <span className="cart-ticker">{cartCount}</span>
          </button>
        </div>
        </div>
    );
    
}

export default MobileMenu;
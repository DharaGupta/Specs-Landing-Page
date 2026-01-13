import React from 'react';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import{ Link } from 'react-router-dom';

const Header = ({cartCount}) => {
 
  const [isMenuOpen, setisMenuOpen] = useState(false);

    return(
      <>
      <header className="header-container">
        <div className="header-content-wrapper">
         
         <nav className="nav-link">
            <a href='#products'>PRODUCTS</a>
            <a href='#about'>ABOUT</a>
            <a href='#contact'>CONTACT</a>
          </nav>

          <button className="cart-button">
            CART 
            <span className="cart-ticker">{cartCount}</span>
          </button>

          <div className="utility-icon" onClick={() => setisMenuOpen(true)}>
            <GiHamburgerMenu size={30} color='white' />
          </div>

        </div>  
      </header>

      {isMenuOpen && (
        <MobileMenu onClose = {() => setisMenuOpen(false)} cartCount={cartCount}/>
      )}

    </>
    );
};

export default Header;
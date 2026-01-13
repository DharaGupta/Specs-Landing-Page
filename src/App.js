import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MobileMenu from './Components/MobileMenu';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  // creating memory to store numbers in cart
  const [cart, setCart] = useState({});

  // function to add to cart
  const addToCart = (productId) => {
   setCart(prevCart => {
    const currentQty = prevCart[productId] || 0;
    return{
      ...prevCart, 
      [productId]: currentQty + 1
    };
   });
  };

  // adding the numbers inside the cart to arrive at total no. of items in the cart
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const currentQty = prevCart[productId] || 0;

      if(currentQty <= 1){
        // remove product completely
        const {[productId]: _, ...rest }=prevCart;
        return rest;
      }

      return{
        ...prevCart,
        [productId]: currentQty-1
      };
    });
  };

  return (
    <div className="App">
        <Header cartCount={cartCount} />
        <Hero />
        <About cart = {cart}
        onAddToCart={addToCart}
        onRemoveFromCart = {removeFromCart}
         />
        <Footer />
    </div>
    
  );
}

export default App;

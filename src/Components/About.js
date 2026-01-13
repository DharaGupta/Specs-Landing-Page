import React, {useRef} from "react";
import ProductCard from "./ProductCard";
import useScrollReveal from "./useScrollReveal";

const About = ({cart, onAddToCart, onRemoveFromCart }) => {
   const productListRef = useRef(null);
   const scrollLeft = () => {
      productListRef.current.scrollBy({
         left: -342,
         behavior: "smooth"
      });
   };

   const scrollRight = () => {
      productListRef.current.scrollBy({
         left: 342,
         behavior: "smooth"
      });
   };

   return(
    <div className="About">
      <div className="aboutLable" className="aboutLable fade-up"> ABOUT </div>
      <div className="aboutTitle" className="aboutTitle fade-up"> Customize your smart glasses for a truly unique experience.</div> 
      <div className="aboutBody" className="aboutBody fade-up">Transform your smart glasses into a stylish accessory. Pick from a variety of chic lenses and frames.
      <br />
      <br />
Tailor features to match your needs.</div>

      <ProductCard ref = {productListRef}
       onAddToCart={onAddToCart}
      onRemoveFromCart = {onRemoveFromCart}
      cart = {cart}
      />

      <div className="navButton">
         <button className="arrowButton" onClick={scrollLeft}><img src = "image/leftArrow.svg"/></button>
         <button className="arrowButton" onClick={scrollRight}><img src = "image/rightArrow.svg"/></button>
      </div>
    </div>

             
    
   );
}

export default About;
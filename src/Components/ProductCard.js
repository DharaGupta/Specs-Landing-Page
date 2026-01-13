import React, {forwardRef} from "react";
import productsData from "../data/products.json";

const ProductCard = forwardRef(({cart, onAddToCart, onRemoveFromCart }, ref) => {
    console.log(productsData);

    return(
        <div className="productSection">
            <div className="productList" ref={ref}>
            
            {productsData.productsData.map(product => {
                const quantity = cart[product.id] || 0;

                return(
                  <div className="productCard" key = {product.id}>

                    <div className="imagenCart">
                       <img 
                        src = {`/${product.image}`}
                        alt = {product.name}
                        className="productImage"
                       />

                       {quantity === 0? (
                         <button 
                          className="plusButton" 
                          onClick={() => onAddToCart(product.id)}>
                           <img src = "image/plus.svg"/>
                         </button>
                       ):(
                        <div className="counter">
                            <button className="counterButtons" onClick={() => onRemoveFromCart(product.id)}><img src = "image/minus.svg"/></button>
                            <span className="quantity">{quantity}</span>
                            <button className="counterButtons" onClick={() => onAddToCart(product.id)}><img src = "image/plus.svg"/></button>
                        </div>
                       )}
                       
                    </div>

                    <div>
                        <p  className="productCategory">{product.category}</p>
                    </div>

                    <div className="NamenPrice">
                        <p className="nameNpriceFont">{product.name}</p>
                        <p className="nameNpriceFont">{product.price}</p>
                    </div>

                </div> 
                );
                
            })}
           
        </div>

        </div>
        
    );
});

export default ProductCard;
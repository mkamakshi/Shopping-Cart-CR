import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";import "./PhoneCard.css"
export const PhoneCard = ({phone}) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const [isInCart, setIsInCart] = useState(false);
    const {name,price,id} = phone;
    const image = `../assets/images/${id}.png`
    useEffect(() => {
        const productIsInCart = cartList.find(cartItem => cartItem.id === id);
    
        if(productIsInCart){
          setIsInCart(true);
        } else {
          setIsInCart(false);
        }
    
      }, [cartList, id]);
  return (

<div className="productCard">
    <img  src={image} alt={name} />
    <p className="name">{name}</p>
    <div className="action">
    <p >${price}</p>
    { isInCart ? (<button className="remove" onClick={() => removeFromCart(phone)}>Remove</button>) :  (<button onClick={() => addToCart(phone)}>Add To Cart</button>) }
    </div>
    
</div>  
    
    )
}

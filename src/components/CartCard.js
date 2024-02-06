import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({item}) => {
  const { removeFromCart } = useCart();
 const {id, name, price} = item;
 const image = `../assets/images/${id}.png`;

  return (
 
    <div className="cartCard">
      <img src={image} alt={name}/>
      <span className="productName">{name}</span>
      <span className="productPrice">${price}</span>
      <button onClick={() => removeFromCart(item)} >Remove</button>
    </div>
 )
}

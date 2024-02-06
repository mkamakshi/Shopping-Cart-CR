import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext";
import Logo from "../assets/images/logo.png"
import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      
          <Link to="/" className="logo">
            <img src={Logo} alt="Shopping Cart Logo" className="border b-2" />
            <span className="border b-2">Shopping Cart</span>  
          </Link>

          <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>

      <Link to="/cart" className="items">
        <span className="border b-2">Cart: {cartList.length}</span>
      </Link>

    </header>
  )
}

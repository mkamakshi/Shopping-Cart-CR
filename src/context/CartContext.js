import { createContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { useContext, useReducer } from "react";


const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const addToCart = (item) => {
        const updatedCartList = state.cartList.concat(item);
        updateTotal(updatedCartList);   
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeFromCart = (item) => {
        const updatedCartList = state.cartList.filter(current => current.id !== item.id);
        updateTotal(updatedCartList);
        dispatch(
            {
            
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList
            }
        })
    }
  
    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price);

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }

    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
    }
export const useCart = () => {
        const context = useContext(CartContext);
        return context;
    }



import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid";

export const CartContext = createContext();
const CartContextProvider = (props) => {
    const [Cart, setCart] = useState([
    ]);
    function changeProduct(newArr){
        setCart(newArr);
        return Cart;
    }
    return (<CartContext.Provider value={{ Cart, changeProduct }}>
        {props.children}
    </CartContext.Provider>)
}
export default CartContextProvider

   /*
    const addProduct=(type, price, quantity)=>{
        setCart(Cart.map(elem=>{
            
            if(elem.type===productType){return {type: elem.type,
                                                price: elem.price,
                                                quantity: elem.quantity+1,
                                                key: elem.key }
                                       }
                                }));
    }
      setCart( ...Cart, {type: type, price: price, quantity: quantity, key: {uuidv4}})
    }
    const removeProduct=(productType)=>{

        setCart(Cart.map(elem=>{
            
            if(elem.type===productType){return {type: elem.type,
                                                price: elem.price,
                                                quantity: elem.quantity-1,
                                                key: elem.key }
                                       }
                                }));
    }

        setCart(Cart.filter(elem=>{(elem.quantity>0)}));
        */
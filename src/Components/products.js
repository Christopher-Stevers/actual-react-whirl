
import style from './products.module.scss';
import React, { useContext } from 'react'
import { CartContext } from './context';
import { v4 as uuidv4 } from 'uuid';

import {  useState } from "react";
function Product(props) {
    const passedStyles = {
        backgroundImage: `url( ${props.background} )`,

    }
    const Context = useContext(CartContext);
    const { Cart } = useContext(CartContext);
    const [quantity, upDateQuantity] = useState(0);

   /* const changeQuant = (e) => {
        if(e){ upDateQuantity(e.target.value);
            Context.changeProduct(Cart.map((elem) => {

                if (elem.type === props.nameDescription) {
                    return {
                        type: elem.type,
                        price: elem.price,
                        key: elem.key,
                        quantity: e.target.value
                    }
                }

            }));
        }

           
    }*/
    const addFirstIngredient = () => {
        addIngredient();


    }
    const addIngredient = () => {
        if (quantity < 1) {
            console.log(quantity);
            Context.changeProduct([...Cart, {
                type: props.nameDescription,
                price: props.price,
                key: uuidv4(),
                quantity: 1
            },
            ]);
        }

        else {
            Context.changeProduct(
                Cart.map((elem) => {
                    if (elem.type === props.nameDescription) {
                        return {
                            type: elem.type,
                            price: elem.price,
                            key: elem.key,
                            quantity: elem.quantity + 1


                        }

                    } else { return elem }
                })
            )
        }
        console.log(Cart);
        upDateQuantity(quantity + 1);


    }
    const removeIngredient = () => {
        if (quantity > 1) {
            Context.changeProduct(
                Cart.map((elem) => {
                    if (elem.type === props.nameDescription) {
                        return {
                            type: elem.type,
                            price: elem.price,
                            key: elem.key,
                            quantity: elem.quantity - 1


                        }

                    } else { return elem }
                })
            )
        }
        else {
            Context.changeProduct(Cart.filter((elem) => { return (elem.type !== props.nameDescription) })
            );

        }

        upDateQuantity(quantity - 1);


    }
    return (<div className={style.growContainer}><div style={passedStyles} className={style.product}>
        <div className={style.data} ><div>{props.nameDescription}</div> </div>
        <div className={style.data}>${props.price}</div>
        <button onClick={(quantity === 0) ? addFirstIngredient : null} className={style.productButton}>{(quantity > 0) ? <span className={style.addContainer}><button onClick={addIngredient}>+</button><button onClick={removeIngredient}>-</button><span >{quantity}</span></span> : "Add to Cart"}</button>
    </div></div>
    );
}
export default Product;


import style from './cartModal.module.scss';
import {  useContext, useState } from "react";
import { CartContext } from "./context";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Cart(props) {
    const { Cart } = useContext(CartContext);
    let [email, updateEmail]=useState("");

    const Context = useContext(CartContext);
    function buy(e) {
        e.preventDefault();
        let templateParams = {
            from_email: email,
            to_name: 'user_2alctVHDRyRs2gc1ntQhw',
            message: message,
        }
        const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(templateParams.from_email.match(regex)){emailjs.send(
            'service_oqnbbzb',
            'template_ck4xn7l',
            templateParams,
            'user_2alctVHDRyRs2gc1ntQhw'
        );
        window.alert("Your order has been submitted.");
        Context.changeProduct([]);}
        else{window.alert("You either did not enter your email or you did not enter it correctly.")}
    }
    const setEmail=(e)=>{updateEmail(e.target.value);
        }
    const messageArr = Cart.map(elem => `${elem.quantity} ${elem.type} $${((parseFloat(elem.price) * parseFloat(elem.quantity)).toFixed(2))}`);
    const message = messageArr.join(', ');


    const callBack = (elem) => {
        let priceStr = "$" + ((parseFloat(elem.price) * parseFloat(elem.quantity)).toFixed(2));

        return <li className={style.li} key={elem.key}><span>{elem.quantity} {elem.type}</span> <span>{priceStr}</span></li>
    }
  const closeModal=()=>{props.updateCartOpen(false)}

    return (<div className={style.fullModal}><div className={style.overlay}></div><div onClick={(e) => { e.stopPropagation() }} className={style.wrapper}><h2 className={style.h2}>Cart</h2>

        {(Cart.length<1) ? 
        <span><span>Your Cart is empty.</span> <Link to="/shop" onClick={closeModal}  className={style.shopButton}>Shop</Link></span> : 
        <form className={style.form}><ul className={style.ul}>

            {Cart.map(callBack)}</ul>
            <span>Your Email: <input className={style.input} name="email"  type="email" placeholder="myemail@myprovider.com" onInput={setEmail} required></input></span>
            <div className={style.label} HTMLfor="email">If you are happy with your order please place it and we will verify it via email and arrange delivery/pickup plans.</div>
            <button aria-label="buy" type="submit" className={style.buy} onClick={buy}>Place Order</button>
        </form>}</div></div>
    );
}
export default Cart;

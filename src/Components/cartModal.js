
import style from './cartModal.module.scss';
import {  useContext } from "react";
import { CartContext } from "./context";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Cart() {
    const { Cart } = useContext(CartContext);
    console.log(Cart);
    let email=[];

    const Context = useContext(CartContext);
    function buy(e) {
        e.preventDefault();
        let templateParams = {
            from_email: email,
            to_name: 'user_2alctVHDRyRs2gc1ntQhw',
            message: message,
        }
        if(templateParams.email){emailjs.send(
            'service_oqnbbzb',
            'template_ck4xn7l',
            templateParams,
            'user_2alctVHDRyRs2gc1ntQhw'
        )
        window.alert("Your order has been submitted.");
        Context.changeProduct([]);}
        else{window.alert("Please enter your email.")}
    }
    const setEmail=(e)=>{email=e.target.value;}
    const messageArr = Cart.map(elem => `${elem.quantity} ${elem.type} $${((parseFloat(elem.price) * parseFloat(elem.quantity)).toFixed(2))}`);
    const message = messageArr.join(', ');


    const callBack = (elem) => {
        let priceStr = "$" + ((parseFloat(elem.price) * parseFloat(elem.quantity)).toFixed(2));

        return <li className={style.li} key={elem.key}><span>{elem.quantity} {elem.type}</span> <span>{priceStr}</span></li>
    }


    return (<div className={style.fullModal}><div className={style.overlay}></div><div onClick={(e) => { e.stopPropagation() }} className={style.wrapper}><h2 className={style.h2}>Cart</h2>

        {(Cart.length<1) ? 
        <span><span>Your Cart is empty.</span> <Link to="/shop" className={style.shopButton}>Shop</Link></span> : 
        <form className={style.form}><ul className={style.ul}>

            {Cart.map(callBack)}</ul>
            <input className={style.input} type="email" placeholder="myemail@myprovider.com"  onChange={setEmail} required></input>
            <label className={style.label} >If you are happy with your order please place it and we will verify it via email and arrange delivery/pickup plans.</label>
            <button name="buy" type="submit" className={style.buy} onClick={buy}>Place Order</button>
        </form>}</div></div>
    );
}
export default Cart;

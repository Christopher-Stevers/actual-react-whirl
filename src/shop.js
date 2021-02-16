import Navbar from './Components/Navbar';
import style from './shop.module.scss';
import Products from './Components/products';
import Header from './Components/Header';
import navbarStyle from './Components/Navbar.module.scss';
import Footer from './Components/footer'
import { useState } from 'react';
function Shop() {
const [isSmoll]=useState(window.matchMedia("(max-width: 500px)").matches);
const [isClosed, updateIsClosed]=useState(true);
console.log(isSmoll);
const toggle=()=>{isClosed?updateIsClosed(false): updateIsClosed(true)};
    
    return (<div className={style.grid}>
        <Header title="Our Products" />
            <div className={style.sticky}>
              <div onClick={toggle}> {isClosed?<div><div className={style.x}>x</div><Navbar />
            <div className={style.wrapper}>
                <a className={navbarStyle.shopButton} href="#Beef">Beef</a>
                <a className={navbarStyle.shopButton} href="#Pork">Pork</a>
                <a href="#Grains" className={navbarStyle.shopButton}>Grains</a>
                </div></div>: <div className={style.svgWrapper}><svg className={style.svg}role="button" id="icon" onClick={toggle} width="55" height="45">
            <rect width="35" height="5" y="10" x="10" fill="black" />
            <rect width="35" height="5" y="20" x="10" fill="black" />
            <rect width="35" height="5" y="30" x="10" fill="black" />
        </svg></div> }
                </div></div>
            
           
       
            


        <div className={style.shopContainer}>
            <h2 className={style.h2} id='Beef'>Beef</h2>
            <section className={style.section} >
                <Products price="4.19" nameDescription='Prime Rib Roast' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="4.00" nameDescription='Rump Roast' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="4.00" nameDescription='Ground Beef' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="7.00" nameDescription='T-Bone Steak' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="24.00" nameDescription='Wing Steak' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} /></section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Pork'> Pork</h2> <section className={style.section} >
            <Products price="4.19" nameDescription='Shoulder Roast' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="4.00" nameDescription='Pork Chop' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="4.00" nameDescription='Spare Ribs' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="7.00" nameDescription='Bacon' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="24.00" nameDescription='Sausage' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} /></section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Grains'> Grain Products</h2> <section className={style.section} >
            <Products price="4.19" nameDescription='Spelt' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                <Products price="4.00" nameDescription='Corn' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                
                <Products price="4.00" nameDescription='Wheat' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} />
                
                <Products price="4.00" nameDescription='Soy Oil' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'} /></section>
        </div>
        <Footer />

    </div>
    );
}
export default Shop;

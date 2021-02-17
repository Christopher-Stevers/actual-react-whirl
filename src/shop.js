import Navbar from './Components/Navbar';
import Sample from "./sampleImage.webp"
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
                <Products price="18.19" nameDescription='Prime Rib Roast' background={Sample} />
                <Products price="6.99" nameDescription='Rump Roast' background={Sample} />
                <Products price="4.99" nameDescription='Ground Beef' background={Sample} />
                <Products price="15.99" nameDescription='T-Bone Steak' background={Sample} />
                <Products price="7.99" nameDescription='Wing Steak' background={Sample} /></section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Pork'> Pork</h2> <section className={style.section} >
            <Products price="4.19" nameDescription='Shoulder Roast' background={Sample} />
                <Products price="3.99" nameDescription='Pork Chop' background={Sample} />
                <Products price="3.99" nameDescription='Spare Ribs' background={Sample} />
                <Products price="7.99" nameDescription='Bacon' background={Sample} />
                <Products price="5.99" nameDescription='Sausage' background={Sample} /></section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Grains'> Grain</h2> <section className={style.section} >
            <Products price="4.19" nameDescription='Spelt' background={Sample} />
                <Products price="4.99" nameDescription='Corn' background={Sample} />
                
                <Products price="4.89" nameDescription='Wheat' background={Sample} />
                
                <Products price="5.99" nameDescription='Soy Oil' background={Sample} />
                
                <Products price="1.99" nameDescription='Wheat' background={Sample} /></section>
        </div>
        <Footer />

    </div>
    );
}
export default Shop;

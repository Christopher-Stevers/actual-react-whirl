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
                <Products price="18.19" nameDescription='Rib Steak' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3335_ne7F8o3F6.JPG"} />
                <Products price="8.99" nameDescription='Blade Roast' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3336_MAi6NDkkO.JPG"} />
                <Products price="15.99" nameDescription='Sirloin Steak' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3338_uRIJPixy3.JPG"} />
                <Products price="4.99" nameDescription='Hamburgers' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3337_T2B7EyFg5x.JPG"} />
                </section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Pork'> Pork</h2> <section className={style.section} > 
                <Products price="6.99" nameDescription='Pork Chop' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3339_Vby943vTx.JPG"} />
                <Products price="12.99" nameDescription='Tenderloin' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3332_zV9RTUdRvQ.JPG"} />
                <Products price="4.39"nameDescription='Ground Pork' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3330_pkp-Kcwhb.JPG"} />
                <Products price="3.99" nameDescription='Spare Ribs' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3331_m19ZL-qR_.JPG"} />
                <Products price="7.99" nameDescription='Bacon' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3331_m19ZL-qR_.JPG"} />
                <Products price="4.99" nameDescription='Sausage' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/IMG_3333_RM_R1Fifn.JPG"} /></section>
        </div>
        <div className={style.shopContainer}>
            <h2 className={style.h2}  id='Grains'> Grain</h2> <section className={style.section} >
            <Products price=".39" nameDescription='Spelt' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/220px-2009-06-20_Silvolde_02_dinkel_GbTd2su1y1.jpg"} />
                <Products price="0.30" nameDescription='Rye' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/rye_2_toeoXuK.jpg"} />
                
                <Products price="0.19" nameDescription='Wheat' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/external-content.duckduckgo.com_uOlHvG5mE8.jpg"} />
                
                <Products price=".18" nameDescription='Corn' background={"https://ik.imagekit.io/xqwrtgfm6ym/tr:w-400,h-300,c-force/image_preview_7-Gpxb9r0.jpg"} />
                
                </section>
        </div>
        <Footer />

    </div>
    );
}
export default Shop;

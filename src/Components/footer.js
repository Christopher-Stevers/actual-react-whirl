import style from  './footer.module.scss';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
function Footer() {
    return (
      <div className={style.footwrapper}>
        <footer className={style.footerElem}>
          
        <Link  to="/">Home</Link>
        <Link  to="/contact">Contact</Link>
        <Link to="/shop" >Shop</Link>
        <div className={style.referal}>Designed by <a href='http://www.devstevers.tk/' className='footer'>CStevers Development</a></div></footer>
        
      </div>
    );
  }
  export default Footer;
  
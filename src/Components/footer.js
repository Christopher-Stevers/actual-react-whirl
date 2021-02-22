import style from  './footer.module.scss';

import { Link} from 'react-router-dom';
function Footer() {
    return (
        <footer className={style.footerElem}>
          
        <Link  to="/">Home</Link>
        <Link  to="/contact">Contact</Link>
        <Link to="/shop" >Shop</Link>
        <div className={style.referal}>Designed by <a href='http://www.devstevers.tk/' className='footer'>CStevers Development</a>     <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></div></footer>
        
    );
  }
  export default Footer;
  
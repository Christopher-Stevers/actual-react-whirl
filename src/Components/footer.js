import style from  './footer.module.scss';
function Footer() {
    return (
      <div className={style.footwrapper}>
        <footer className={style.footerElem}><a className={style.footer} href='#home'>Home</a>
        <a className={style.footer}  href='#contact'>Contact</a>
        <a className={style.footer}  href='#shop' >Shop</a>
        <div className={style.referal}>Designed by <a href='http://www.devstevers.tk/' className='footer'>CStevers Development</a></div></footer>
        
      </div>
    );
  }
  export default Footer;
  
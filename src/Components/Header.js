import style from './Header.module.scss';
function Header(props) {
    return (<header className={style.background} >
        <h1 className={style.h1}>{props.title}</h1>
        </header>
    );
  }
  export default Header;
  
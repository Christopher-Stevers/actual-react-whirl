import style from './Header.module.scss';
function Header(props) {
    return (<div className={style.background} >
        <h1 className={style.h1}>{props.title}</h1>
        </div>
    );
  }
  export default Header;
  
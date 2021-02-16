import style from './h2.module.scss';

function H2(props) {
    return (
        <h2 className={style.h2}>{props.h2}</h2>
        );
  }
  export default H2;
  
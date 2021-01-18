import './Navbar.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
function Navbar() {
    return (<div className='wrapper'>
        <Link to="/">Home</Link>
        <Link to="/shop">Contact</Link>
        <Link to="/shop"id='shop'>Shop</Link>
        </div>
    );
  }
  export default Navbar;
  

import './App.scss'
import Mainpage from './mainpage'
import contactPage from'./contact'
import error from './404'
import Shop from './shop'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import CartContextProvider from "./Components/context";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    
    /**//**/
<CartContextProvider 
  
  >
    <Router>
     <ScrollToTop />
    <Switch>
      <Route exact path='/' component={Mainpage} />
      <Route exact path='/shop' component={Shop} />
      <Route exact Path='/contact' component={contactPage}/>
      <Route component={error} />
    </Switch>
  </Router> 
  </CartContextProvider>
  );
}
export default App;

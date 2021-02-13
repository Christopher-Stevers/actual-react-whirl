import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/body';
import Footer from './Components/footer';
import style from './mainpage.module.scss'
function Mainpage() {
  return (
    <div className="App">
      <Header title="Whirl Creek Farm"/>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
export default Mainpage;

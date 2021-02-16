import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/body';
import Footer from './Components/footer';
import H2 from './Components/h2';
function Mainpage() {
  return (
    <div className="App">
      <Header title="Whirl Creek Farm"/>
      <Navbar />
      <H2 h2="Our Farm"/>
      <Body />
      <Footer />
    </div>
  );
}
export default Mainpage;

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/body';
import Footer from './Components/footer';
import './Components/Navbar.css';
function Mainpage() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div class='flex'><Body /><img src="https://cdn.discordapp.com/attachments/515327418366427136/799740846274510848/IMG_1861.JPG" alt='cow'></img></div>
      <Footer />
    </div>
  );
}
export default Mainpage;

import Navbar from './Components/Navbar';
import Body from './Components/body';
import './shop.css';
import Products from './Components/products';
function Shop() {
    return (<div className='App'>
        <h1>Products</h1>
     <Navbar />
     <Products price="hello" name='Pork Chops' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'}/>
     <Products price="hello" name='porkchops' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'}/>
     <Products price="hello" name='porkchops' background={'https://cdn.discordapp.com/attachments/515323660962234381/637382179403595776/IMG_27611.JPG'}/>
<div>Beef</div>
        </div>
    );
  }
  export default Shop;
  
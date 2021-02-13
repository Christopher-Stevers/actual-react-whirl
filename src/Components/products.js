
import './products.module.scss';
function Product(props) {
    const passedStyles = {
        backgroundImage: `url( ${props.background} )`,

    }
    return (<div style={passedStyles} className='Product'>
        <div className='data'><div>{props.name}</div> <div>{props.price}</div></div>
        <button className='productButton'>Add to Cart</button>
    </div>
    );
}
export default Product;

import './styles.css';
import {Link} from 'react-router-dom';


function Checkout(props) {
    
  return (
     
    <div className="Checkout-container">
     <div className='checkout-header'>
        <span>Checkout</span>
        </div>
     <div className='products-container'>
        <div className='products-header'>Products</div>
        <div className='products-list'>
        {props.products.map((product, id) => (
            <div className='product-item' key={id}>
                <Link to ="#" className="title" >{product.title}</Link>
                <span>$ {product.price}</span>
            </div>
          
        ))}
        </div>
     </div>
     <div className='shipping-method-container'>
        <div className='shipping-method-header'>Shipping Method</div>
       
            <div className='shipping-method'>
            <span>FedEx</span>
            <span>$13.99</span> 
            </div>
           
     
        
       
     </div>

   
    </div>
  );
}

export default Checkout;
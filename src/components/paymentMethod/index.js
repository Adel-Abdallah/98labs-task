import './styles.css';
import { useEffect, useState } from 'react';
import Paypal from './Paypal';
import CreditCard from './CreditCard';
import GiftCard from './GiftCard';
import {Link , NavLink } from 'react-router-dom';
import PaymentModal from './Modal';


function PaymentMethod(props) {
  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [total, setTotal] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

useEffect(() => {
  let total = 0;
  props.products.map((product, id) => (
    total += product.price
  ))
  setTotal(total);
}, [props.products]);

console.log(total, 'total');



    
  return (
    <div className="PaymentMethod">

      {PaymentModal && <PaymentModal  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
    
    <div className='Payment-method-container'>
        <div className='Payment-method-header'>Payment Method</div>
        <div className='Payment-method-buttons'>
          <NavLink to="/CreditCard" className='payment-button' onClick={()=> setPaymentMethod("CreditCard")}>Cridet Card</NavLink>
          <NavLink to="/Paypal" className='payment-button' onClick={()=> setPaymentMethod("PayPal")}> PayPal </NavLink>
          <NavLink to="/GiftCard" className='payment-button' onClick={()=> setPaymentMethod("Gift Card")}> Gift Card </NavLink>
        </div>

       {paymentMethod === "CreditCard" &&  <CreditCard total={total}/>} 
        {paymentMethod === "PayPal" &&  <Paypal total={total}/>}
        {paymentMethod === "Gift Card" &&  <GiftCard total={total}/>}
      
          <div  className='terms-wrapper'>
          <input type="checkbox"  name="" className='terms input' />
          <label >
          I accept the <Link to="#" onClick={()=> setModalIsOpen(true)}>term and conditions</Link>
        </label>
          
          </div>
          <button className="place-order-button">Place Order ($ {total} ) </button>
    </div>

    </div>
  );
}

export default PaymentMethod;
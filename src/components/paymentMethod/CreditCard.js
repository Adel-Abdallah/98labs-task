import './styles.css';

function CreditCard(props) {

    
  return (
    <div className='inputs'>
    <div className='input-box1'>
      <label className='card-number'>
        Card number
      </label>
      <input type="text" placeholder="1234 5678 9012 3456" />
      <label className='validity-container'>
      Valid thru (mm/yy)
      </label>
      <div className='validity-wrapper'>
         <input className='validity' type="number" placeholder="MM" />
         <div>/</div> 
         <input className='validity' type="number" placeholder="yy" />
      </div>
      <label className='card-holder-name'>
      Cardholder's Name
      </label>
       <input type="text" placeholder="John Doe" />
    
    </div>
    <div className="input-box2">
    <label className="cvv-cvc">
    CVV/CVC
      </label>
    <input className='cvv-cvc-input' type="text" placeholder="123" />
    </div>
    </div> 
      
    
  );
}

export default CreditCard;
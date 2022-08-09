import './App.css';
import { useState ,useEffect } from 'react';
import Checkout from './components/checkout';
import PaymentMethod from './components/paymentMethod';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(data=>{ setProducts(data)})
            .then(json=>console.log(json))
            .catch(err=>console.log(err))
  },[])

  
  return (
    <div className="App">
     <div className='logo'>

      <img src={require('./98labs.png')} alt="98lab"/>
     </div>
     <Checkout  products={products} setProducts={setProducts}/>
      <PaymentMethod products={products} setProducts={setProducts}/>


    </div>
  );
}

export default App;

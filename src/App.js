import Header from './components/Layout/Header'
import React,{useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './components/store/CartProvider';
function App() {

  const [isCartShow,setIsCartShow] = useState(false);
  const showCart = () => {
    setIsCartShow(true);
  }
  const hideCart = () => {
    setIsCartShow(false);
  }
  return (
    <CartProvider>
      {isCartShow && <Cart onClose = {hideCart}/>}
      <Header onShowCart = {showCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

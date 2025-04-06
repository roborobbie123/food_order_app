import { useState, useEffect } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [meals, setMeals] = useState();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [total, setTotal] = useState();

  async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');
    if (!response.ok) return;
    const data = await response.json();
    setMeals(data);
  }

  async function addOrder(orderData) {
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

    } catch (err) {
      console.log(err);
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    setCart(null);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    if (!cart) return;
    let cartTotal = cart.reduce((sum, cartItem) => sum + parseFloat(cartItem.price), 0)
    setTotal(cartTotal);
  }, [cart]);

  function addToCart(id) {
    const item = meals.find(item => item.id === id);
    (cart ? setCart(prevCart => [
      ...prevCart,
      item
    ]) : setCart([item]));
    console.log('added to cart');
  }

  function showCartModal() {
    setIsCartOpen(prevState => !prevState);
    console.log(cart)
  }

  function showCheckoutModal() {
    setIsCheckoutOpen(prevState => !prevState);
    console.log('checkout')
  }

  function removeFromCart(id) {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === id);
      if (index === -1) return prevCart;

      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <>
      <Header show={showCartModal} cart={cart} />
      <Modal open={isCartOpen}>
        <Cart cart={cart} remove={removeFromCart} close={showCartModal} checkout={showCheckoutModal} total={total} />
      </Modal>
      <Modal open={isCheckoutOpen}>
        <Checkout open={showCheckoutModal} total={total} addOrder={addOrder} cart={cart} />
      </Modal>
      <Meals cart={cart} meals={meals} add={addToCart} remove={removeFromCart} />
    </>
  );
}

export default App;

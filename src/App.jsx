import { useState, useEffect } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [meals, setMeals] = useState();

  async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');
    if (!response.ok) return;
    const data = await response.json();
    setMeals(data);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  function addToCart(id) {
    const item = meals.find(item => item.id === id);
    (cart ? setCart(prevCart => [
      ...prevCart,
      item
    ]) : setCart([item]));
    console.log('added to cart');
  }

  function showModal() {
    setIsCartOpen(prevState => !prevState);
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
      <Header show={showModal}/>
      <Cart cart={cart} remove={removeFromCart} isOpen={isCartOpen}/>
      <Meals cart={cart} meals={meals} add={addToCart} remove={removeFromCart} />
    </>
  );
}

export default App;

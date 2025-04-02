import { useState, useEffect } from "react";

export default function Cart({ cart, remove, isOpen }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        if (!cart) return;
        let cartTotal = cart.reduce((sum, cartItem) => sum + parseFloat(cartItem.price), 0)
        setTotal(cartTotal);
    }, [cart])

    return (
        <>
            {isOpen && <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {(cart && cart.length > 0) && cart.map(item => <li className="cart-item">
                        <p>{item.name} ${item.price}</p>
                        <button className="cart-item-actions" onClick={() => remove(item.id)}>Remove</button></li>)}
                    <li className="cart-total">Total: ${total?.toFixed(2)}</li>
                </ul>

            </div>}
        </>

    )
}
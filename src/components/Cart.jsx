import { useState, useEffect } from "react";

export default function Cart({ cart, remove, close, checkout, total }) {
    

    function showCheckout() {
        close();
        checkout();
    }

    return (
        <>
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {(cart && cart.length > 0) && cart.map(item => <li className="cart-item">
                        <p>{item.name} ${item.price}</p>
                        <button className="cart-item-actions button" onClick={() => remove(item.id)}>Remove</button></li>)}
                    <li className="cart-total">Total: ${total?.toFixed(2)}</li>
                    <li>
                        <button className="button" onClick={() => close()}>Close</button>
                        <button className="button" style={{marginLeft: '24rem'}} onClick={() => showCheckout()}>Checkout</button>
                    </li>

                </ul>

            </div>
        </>

    )
}
import { useState } from "react";

export default function Checkout({ open, total, cart, addOrder }) {
    const [info, setInfo] = useState({
        email: '',
        name: '',
        street: '',
        postalCode: '',
        city: ''
    });

    function handleSubmit(event) {
        event.preventDefault();

        const email = info.email;
        const name = info.name;
        const street = info.street;
        const postalCode = info.postalCode;
        const city = info.city;
        

        const orderData = {
            order: {
                items: cart,
                customer: {
                    email,
                    name,
                    street,
                    'postal-code': postalCode,
                    city,
                }
            }
        }

        addOrder(orderData);
        setInfo({
            email: '',
            name: '',
            street: '',
            postalCode: '',
            city: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        type='email'
                        value={info.email}
                        onChange={(event) => setInfo(prevInfo => ({ ...prevInfo, email: event.target.value }))}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        name='name'
                        type='text'
                        value={info.name}
                        onChange={(event) => setInfo(prevInfo => ({ ...prevInfo, name: event.target.value }))}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='street'>Street</label>
                    <input
                        name='street'
                        type='text'
                        value={info.street}
                        onChange={(event) => setInfo(prevInfo => ({ ...prevInfo, street: event.target.value }))}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='postal-code'>Postal Code</label>
                    <input
                        name='postal-code'
                        type='text'
                        value={info.postalCode}
                        onChange={(event) => setInfo(prevInfo => ({ ...prevInfo, postalCode: event.target.value }))}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input
                        name='city'
                        type='text'
                        value={info.city}
                        onChange={(event) => setInfo(prevInfo => ({ ...prevInfo, city: event.target.value }))}
                        required
                    ></input>
                </div>
                <div>Total: ${total?.toFixed(2)}</div>
                <button className="button" type="submit">Confirm Order</button>


            </form>
            <button className="button" onClick={() => open()}>Close</button>
        </div>
    );
}

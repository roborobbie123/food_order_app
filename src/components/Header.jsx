export default function Header({ show, cart }) {
    return (
        <div id="main-header">
            <div id="title">
                <img src="/logo.jpg"></img>
                <h1>Food Order App</h1>
            </div>
            <button onClick={show} className='text-button' >Cart {cart ? `(${cart.length})` : `(0)`}</button>
        </div>
    );
}
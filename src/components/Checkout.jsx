export default function Checkout({ open, total }) {
    return (
        <div>
            <form>
                <div>
                    <input></input><label>First Name</label>
                </div>
                <div>
                    <input></input><label>Last Name</label>
                </div>
                <div>
                    <input></input><label>Address</label>
                </div>
                <div>Total: ${total}</div>
                <button className="button">Confirm Order</button>

                
            </form>
            <button className="button" onClick={() => open()}>Close</button>
        </div>
    );
}
export default function Header({ show }) {
    return (
        <div id="main-header">
            <div id="title">
                <img src="/logo.jpg"></img>
                <h1>Food Order App</h1>
            </div>
            <p onClick={show} style={{cursor:'pointer'}}>Cart</p>
        </div>
    );
}
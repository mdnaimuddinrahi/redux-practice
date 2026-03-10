function Navbar() {
    return (
    <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
        <a href="index.html">
            <img src="./images/logo.png" alt="Grocery" width="30" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
            <a href="#home" className="navHome" id="home"> Home </a>
            <a href="cart.html" className="navCart" id="cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="totalCart">0</span>
            </a>
        </div>
        </div>
    </nav>)
}
export default Navbar;
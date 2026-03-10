import { useDispatch } from "react-redux";
import { ROUTE_GROCERY, ROUTE_CHECKOUT, UPDATE_ROUTE } from "../../redux/grocery/actionTypes";
import {updateRoute} from "../../redux/grocery/actionCreators"

const Navbar = () => {
    const dispatch = useDispatch();
    const handleRoute = (route) => {
        dispatch(updateRoute(route));
    }

    return (
    <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
        <a href="index.html">
            <img src="./images/logo.png" alt="Grocery" width="30" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
            <button className="navHome" id="home" onClick={() => handleRoute(ROUTE_GROCERY)}>
                Home
            </button>
            <button className="navCart" id="cart" onClick={() => handleRoute(ROUTE_CHECKOUT)}>
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="totalCart">0</span>
            </button>
        </div>
        </div>
    </nav>)
}
export default Navbar;
import Navbar from "./Navbar";
import Grocery from "./Grocery";
import { useSelector } from "react-redux";
import { ROUTE_GROCERY } from "../../redux/grocery/actionTypes";
import Checkout from "./Checkout";

const ShoppingCart = () => {
    const route = useSelector((state) => state.grocery.route);
    return (
        <div>
        <Navbar />
        { route === ROUTE_GROCERY ? <Grocery /> : <Checkout /> }
        </div>
    )
}

export default ShoppingCart;
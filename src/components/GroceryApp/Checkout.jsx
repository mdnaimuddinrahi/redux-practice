import CardItem from "./CardItem";
import Billdetail from "./Billdetail";
import { useSelector } from "react-redux";
const Checkout = () => {
    const cartItems = useSelector((state) => state.grocery.cart);

    return(
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                    {cartItems.map((item) => (
                        <CardItem key={item.id} item={item} />
                    ))}
                    </div>
                    <div>
                        <Billdetail />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Checkout;
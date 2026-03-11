import { useSelector } from "react-redux";
const Billdetail= () =>{
    const cartItems = useSelector((state) => state.grocery.cart);

    const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const vat = (subTotal * 0.10).toFixed(2);
    const total = (subTotal + parseFloat(vat)).toFixed(2);

    const handleOrderButtonClick = () => {
        alert("Order placed successfully!");
    }

    return (
        <div className="billDetailsCard">
            <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p>Sub Total</p>
                    <p>BDT <span className="subtotal">{subTotal}</span></p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Discount</p>
                    <p>BDT <span className="discount">0</span></p>
                </div>
                <div className="flex items-center justify-between">
                    <p>VAT (10%)</p>
                    <p>BDT <span className="vat">{vat}</span></p>
                </div>
                <div className="flex items-center justify-between pb-4">
                    <p className="font-bold">TOTAL</p>
                    <p className="font-bold">BDT <span className="total">{total}</span></p>
                </div>
                <button className="placeOrderbtn" onClick={handleOrderButtonClick}>
                    place order
                </button>
            </div>
        </div>);
}

export default Billdetail;
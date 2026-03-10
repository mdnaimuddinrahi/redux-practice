import { useDispatch } from "react-redux";
import {addToCart} from "../../redux/grocery/actionCreators"

const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if(product.quantity > 0) {
            dispatch(addToCart(product));
        } else {
            alert("Sorry, this product is out of stock.");
        }
    }
    return (
        <div className="productCard">
            <img className="productImage" src={product.image_url} alt={product.item_name} />
            <div className="p-4 space-y-2">
                <h4 className="productName">{product.item_name}</h4>
                <p className="productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                <p className="productPrice">BDT <span className="price">{product.price.toFixed(2)}</span></p>
                <p className="productQuantity">QTY <span className="quantity">{product.quantity}</span></p>
            </div>
            <button className="btnAddToCart" onClick={handleAddToCart}>
                Add To Cart
            </button>
        </div>
    </div>)
}

export default ProductCard;
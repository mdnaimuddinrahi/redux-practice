import ProductCard from "./ProductCard";
import NewProduct from "./NewProduct";
import { useSelector } from "react-redux";

function Grocery() {
    const products = useSelector((state) => state.grocery.products);

    return (
        <main className="py-16">
            <div className="productWrapper">
                <div className="productContainer" id="productContainer">
                    {products.length > 0 ? products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        )) : <p className="text-center text-gray-500">No products in the cart. Please add some products.</p>
                    }
                </div>
                <div>
                    <NewProduct />
                </div>
            </div>
        </main>
    );
}

export default Grocery;
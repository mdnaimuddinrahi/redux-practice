import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import NewProduct from "./NewProduct";

function Index() {
    return (
        <div>
            <Navbar />
            <main className="py-16">
                <div className="productWrapper">
                    <div className="productContainer" id="productContainer">
                        <ProductCard/>
                    </div>
                    <div>
                        <NewProduct />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Index;
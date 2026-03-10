const ProductCard = () => {
    return (<div className="productCard">
        <img className="productImage" src="https://i.dummyjson.com/data/products/59/thumbnail.jpg" alt="product" />
        <div className="p-4 space-y-2">
            <h4 className="productName">Spring and summershoes</h4>
            <p className="productCategory">Mens shoes</p>
            <div className="flex items-center justify-between pb-2">
            <p className="productPrice">BDT <span className="price">400</span></p>
            <p className="productQuantity">QTY <span className="quantity">10</span></p>
            </div>
            <button className="btnAddToCart">Add To Cart</button>
        </div>
    </div>)
}

export default ProductCard;
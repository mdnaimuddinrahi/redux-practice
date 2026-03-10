const CardItem = ({ item }) => {
    return(
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                <img className="cartImage" src={item.image} alt={item.name} />
                <div className="space-y-2">
                    <h4 className="cartName">{item.name}</h4>
                    <p className="cartCategory">{item.category}</p>
                    <p>BDT <span className="cartPrice">{item.price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                <div className="flex items-center space-x-4">
                    <button className="incrementQuantity">
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="cartQuantity">{item.quantity}</span>
                    <button className="decrementQuantity">
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                <p className="text-lg font-bold">BDT <span className="calculatedPrice">{item.price * item.quantity}</span></p>
            </div>
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default CardItem;
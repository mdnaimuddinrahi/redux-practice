import { useDispatch } from "react-redux";
import {addProduct} from "../../redux/grocery/actionCreators"

const NewProduct = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newProduct = {
            item_name: form.inputName.value,
            category: form.inputCategory.value,
            image_url: form.inputImage.value,
            price: parseFloat(form.inputPrice.value),
            quantity: parseInt(form.inputQuantity.value, 10)
        };
        dispatch(addProduct(newProduct));
        form.reset();
    }

    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="addProductForm" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="inputName">Product Name</label>
                    <input className="addProductInput" id="inputName" type="text" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inputCategory">Category</label>
                    <input className="addProductInput" id="inputCategory" type="text" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inputImage">Image Url</label>
                    <input className="addProductInput" id="inputImage" type="text" required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="inputPrice" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="inputQuantity" required />
                    </div>
                </div>
                <button type="submit" id="inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    );
}

export default NewProduct;
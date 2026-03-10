const NewProduct = () => {
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="addProductForm">
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
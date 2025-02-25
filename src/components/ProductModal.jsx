const ProductModal = ({ product, onClose, onAddToCart }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-80">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <img src={product.image} alt={product.title} className="w-full h-40 object-contain my-2" />
                <p>{product.description}</p>
                <p className="text-lg font-bold text-green-600">${product.price}</p>
                <button
                    onClick={() => onAddToCart(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    Add to Cart
                </button>
                <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mt-2 ml-2">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProductModal;

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div 
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-md font-semibold mt-2">{product.title}</h3>
      <p className="text-lg font-bold text-green-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;

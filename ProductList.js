import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ onProductClick }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
            ))}
        </div>
    );
};

export default ProductList;

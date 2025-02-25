import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);
  const handleAddToCart = () => setCartCount(cartCount + 1);

  return (
    <div>
      <Header cartCount={cartCount} />
      <ProductList onProductClick={handleProductClick} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Home;

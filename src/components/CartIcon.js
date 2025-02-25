import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon">
      🛒 <span>{cartCount}</span>
    </div>
  );
};

export default CartIcon;

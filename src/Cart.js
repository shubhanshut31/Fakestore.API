import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    return (
        <div className="container">
            <header>
                <h2>Shop</h2>
                <Link to="/">🏠 Home</Link>
            </header>

            <h3>Shopping Cart</h3>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name}
                            <button className="btn-remove" onClick={() => removeFromCart(index)}>
                                ❌ Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/" className="btn-primary">Back to Shopping</Link>
        </div>
    );
};

export default Cart;

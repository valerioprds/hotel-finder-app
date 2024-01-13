"use client";
import React from "react";

export default function Cart({ cartItems }) {
    // Check if cartItems is defined and is an array
    if (!Array.isArray(cartItems)) {
        console.log('items', cartItems)
        return <div className="cart-container">Your cart is empty.</div>;
    }

    return (
        <div className="cart-container">
            <h3>Your Cart</h3>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    {/* Other item details can be added here */}
                </div>
            ))}
        </div>
    );
}

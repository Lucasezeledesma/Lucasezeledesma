import React, { useState } from 'react';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="cart-widget">
      <a href="/">
        <i className="fas fa-shopping-cart"></i>
        <span className="badge badge-primary">{cartCount}</span>
      </a>
      <button onClick={addToCart} className="btn btn-success btn-sm ml-2">Agregar al carrito</button>
    </div>
  );
};

export default CartWidget;

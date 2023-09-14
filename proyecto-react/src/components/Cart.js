import React from 'react';

const Cart = ({ cartItems }) => {
  const cartStyles = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    maxWidth: '300px',
  };

  const headerStyles = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const listItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '5px 0',
  };

  return (
    <div style={cartStyles}>
      <h3 style={headerStyles}>Carrito de Compras</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {cartItems.map((item) => (
          <li key={item.id} style={listItemStyles}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

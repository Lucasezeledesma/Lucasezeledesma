import React, { useState } from 'react';
import './App.css'; // Si usas estilos personalizados
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'; // Importa el componente Cart
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Fernet', price: 3000 },
    { id: 2, name: 'Vodka', price: 2000 },
    { id: 3, name: 'Champagne', price: 2500 },
    { id: 4, name: 'Ron', price: 4000 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <NavBar />
      <CartWidget cart={cart} />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" products={products} addToCart={addToCart} />
      {cart.length > 0 && <Cart cartItems={cart} />} {/* Muestra el componente Cart si hay elementos en el carrito */}
    </div>
  );
}

export default App;

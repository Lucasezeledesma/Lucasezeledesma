import React from 'react';

const ItemListContainer = ({ greeting, products, addToCart }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4">{greeting}</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => addToCart(product)} className="btn btn-success btn-sm ml-2">Agregar al carrito</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const products = [
    {
      id: 1,
      image: 'https://www.bfgcdn.com/1500_1500_90/023-2095-0111/nike-air-zoom-pegasus-41-fp-zapatillas-para-correr.jpg',
      title: 'Nike Air Zoom',
      description: 'Lightweight running shoe with a sleek design.',
      price: 129.99,
    },
    {
      id: 2,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ef4dbed6-c621-4879-8db3-f87296bfb570/BLAZER+MID+%2777+VNTG.png',
      title: 'Nike Blazer Mid',
      description: 'Classic design with modern upgrades.',
      price: 99.99,
    },
    {
      id: 3,
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/67937c9c-d56b-4fb4-8ec1-bdf821ff31e3/NIKE+REACTX+PEGASUS+TRAIL+5.png',
      title: 'Nike Pegasus Trail',
      description: 'Trail running shoe with superior grip.',
      price: 149.99,
    },
  ];

  const [cart, setCart] = useState([]); // Store cart items

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <div className="app">
      <h1>Product Gallery</h1>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

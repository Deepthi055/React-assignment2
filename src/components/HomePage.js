import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

// Example cake data (this can be dynamic or fetched from an API)
const cakes = [
  {
    id: 1,
    name: 'Vanilla Cake',
    price: 500,
    image: '/images/cake1.jpg',
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    price: 600,
    image: '/images/cake2.jpg',
  },
  {
    id: 3,
    name: 'Strawberry Cake',
    price: 550,
    image: '/images/cake3.jpg',
  },
];

function HomePage() {
  const { addToCart } = useCart();
  const [selectedCake, setSelectedCake] = useState(null);

  // Handle when a cake is clicked
  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (selectedCake) {
      addToCart(selectedCake);
      alert(`${selectedCake.name} added to the cart!`);
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to Cake Store</h1>
      
      {/* List of cakes */}
      <div className="cake-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-item" onClick={() => handleCakeClick(cake)}>
            <img src={cake.image} alt={cake.name} width="200" height="150" />
            <h3>{cake.name}</h3>
            <p>Price: &#8377;{cake.price}</p>
          </div>
        ))}
      </div>

      {/* Display selected cake details */}
      {selectedCake && (
        <div className="cake-detail">
          <h2>{selectedCake.name}</h2>
          <img src={selectedCake.image} alt={selectedCake.name} width="300" height="200" />
          <p><strong>Price: &#8377;{selectedCake.price}</strong></p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;

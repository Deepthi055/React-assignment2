import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CakeList() {
  // State for cart and total price
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Cakes data
  const cakes = [
    {
    
      id: 1,
      name: 'Strawberry',
      price: 500,
      image: 'https://images.pexels.com/photos/18604369/pexels-photo-18604369/free-photo-of-sweet-cake-on-tray.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Vanilla Cake',
      price: 350,
      image: 'https://images.pexels.com/photos/20620511/pexels-photo-20620511/free-photo-of-sweet-birthday-cake.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Kitkat Cake',
      price: 600,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJXDMemgsKv3uQCknBSC5KZKklZxVU42r0A&s',
      
    },
    {
      id: 4,
      name: 'Chocolate Vanilla Cake',
      price: 600,
      image: 'https://images.pexels.com/photos/16112672/pexels-photo-16112672/free-photo-of-ornate-cake-with-a-strawberry-on-top.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  // Function to add a cake to the cart
  const addToCart = (cake) => {
    setCart([...cart, cake]);
    setTotal(total + cake.price);
  };

  return (
    <div id="box">
      <h1>Our Best Sellers</h1>
      <ul className="menu1">
        <li style={{ fontWeight: 'bold' }}>Cakes</li>
        <div id="start">
          <ul className="cakes">
            {cakes.map((cake) => (
              <div key={cake.id} className="cake-item" id={`cake${cake.id}`}>
                <img src={cake.image} width="130" height="100" alt={cake.name} />
                <Link to={`/cake/${cake.id}`}>View Details</Link>
                <li>{cake.name}</li>
                <p>
                  <span>Price: &#8377;{cake.price}</span></p>
                <button onClick={() => addToCart(cake)}>Add to Cart</button>
              </div>
            ))}
          </ul>
        </div>
      </ul>

      {/* Cart Section */}
      <div className="cart">
        <h3>Your Cart</h3>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - &#8377;{item.price}
            </li>
          ))}
        </ul>
        <p>Total: &#8377;{total}</p>
        <button
          onClick={() => {
            if (cart.length === 0) {
              alert('Your cart is empty!');
            } else {
              alert(`Order placed successfully! Total: ₹${total}`);
              setCart([]);
              setTotal(0);
            }
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CakeList;

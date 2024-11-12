import React from 'react';


function Cart() {
  return (
    <div className="cart-section">
      <header>
        <nav>
          
        </nav>
      </header>

      <h1>Your Shopping Cart</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/product-details">
                <img src="https://images.pexels.com/photos/19063535/pexels-photo-19063535/free-photo-of-a-white-weeding-cake.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image" width="80" height="80" />
                Product Name
              </a>
            </td>
            <td>
              <input type="number" value="1" min="1" />
            </td>
            <td>₹500</td>
            <td>₹500</td>
          </tr>
          {/* Repeat rows as needed for each item in the cart */}
        </tbody>
      </table>

      <div className="cart-summary">
        <p>Subtotal: ₹500</p>
        <p>Total: ₹500</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

import React from 'react';
import './CakeCategories.css';  // Import CSS for styling if needed

const CakeCategories = () => {
  return (
    <div>
      {/* Cake Categories Section */}
      <section id="categories" className="slider">
        <h2>Cake Categories</h2>
        <div className="slider-container">
          <div className="image-container">
            <img src="cake.jpg" alt="Regular Cakes" className="circular-image" />
            <h3 className="blink">Regular Cakes</h3>
          </div>
          <div className="image-container">
            <img src="image3.jpg" alt="Anniversary Cakes" className="circular-image" />
            <h3 className="blink">Anniversary Cakes</h3>
          </div>
          <div className="image-container">
            <img src="image4.jpg" alt="New Year Cakes" className="circular-image" />
            <h3 className="blink">New Year Cakes</h3>
          </div>
          <div className="image-container">
            <img src="image5.jpg" alt="Theme Cakes" className="circular-image" />
            <h3 className="blink">Theme Cakes</h3>
          </div>
          <div className="image-container">
            <img src="image6.jpg" alt="Dark Chocolate Cakes" className="circular-image" />
            <h3 className="blink">Dark Chocolate Cakes</h3>
          </div>
          <div className="image-container">
            <img src="image7.jpg" alt="Fancy Cakes" className="circular-image" />
            <h3 className="blink">Fancy Cakes</h3>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section id="featured" className="featured">
        <h2>Featured Cakes</h2>
        <div className="featured-cakes">
          <div className="cake">
            <img src="cake1.jpg" alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>Price: ₹500</p>
          </div>
          <div className="cake">
            <img src="cake2.jpg" alt="Vanilla Cake" />
            <h3>Vanilla Cake</h3>
            <p>Price: ₹350</p>
          </div>
          <div className="cake">
            <img src="cake3.jpg" alt="Red Velvet Cake" />
            <h3>Red Velvet Cake</h3>
            <p>Price: ₹700</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CakeCategories;

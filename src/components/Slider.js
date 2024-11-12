import React from 'react';

function Slider() {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="image-container">
          <img src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Regular Cakes" className="circular-image" />
          <h3>Regular Cakes</h3>
        </div>
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxjs3vHAhN5yEoSMAR1baPj62hpnAd_3FkA&s" alt="Anniversary Cakes" className="circular-image" />
          <h3>Anniversary Cakes</h3>
        </div>
        <div className="image-container">
          <img src="https://images.pexels.com/photos/16024997/pexels-photo-16024997/free-photo-of-cake-with-the-inscription-happy-new-year-with-a-burning-candle-on-the-background-of-lights-and-confetti.jpeg?auto=compress&cs=tinysrgb&w=600" alt="New Year Cakes" className="circular-image" />
          <h3>New Year Cakes</h3>
        </div>
        <div className="image-container">
          <img src="https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Theme Cakes" className="circular-image" />
          <h3>Theme Cakes</h3>
        </div>
        <div className="image-container">
          <img src="https://images.pexels.com/photos/16777905/pexels-photo-16777905/free-photo-of-a-cake-with-chocolate-icing.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Dark Chocolate Cakes" className="circular-image" />
          <h3>Dark Chocolate</h3>
        </div>
        <div className="image-container">
          <img src="https://images.pexels.com/photos/14849495/pexels-photo-14849495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fancy Cakes" className="circular-image" />
          <h3>Fancy Cakes</h3>
        </div>
      </div>
    </div>
  );
}

export default Slider;

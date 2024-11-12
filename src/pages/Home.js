import React from 'react';
import Navbar from 'cake/src/components/Navbar';  // Import Navbar component
import Slider from 'cake/src/components/Slider';  // Import Slider component
import CakeList from 'cake/src/components/CakeList';  // Import CakeList 
 


function Home() {
  return (
    <div>
      
      <Slider />
      <CakeList />
      
    </div>
  );
}

export default Home;

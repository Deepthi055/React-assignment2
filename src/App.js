import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './styles/style.css';  // Adjust the path according to your folder structure
import CakeDetail from './pages/CakeDetail';


function App() {
  return (
    <Router>
      <Navbar />  {/* Display the Navbar globally */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cake/:id" element={<CakeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

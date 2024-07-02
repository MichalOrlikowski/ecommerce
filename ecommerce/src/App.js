import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ProductCatalog from './pages/ProductCatalog';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

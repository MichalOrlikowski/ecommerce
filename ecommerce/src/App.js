import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import productsData from './data/products.json';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<ProductCatalog products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


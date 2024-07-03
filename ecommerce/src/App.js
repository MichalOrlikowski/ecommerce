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
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<ProductCatalog products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts} />} />
        <Route path="/products" element={<ProductCatalog products={products} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


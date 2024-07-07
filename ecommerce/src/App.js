import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import productsData from './data/products.json';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Notification = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleOrder = () => {
    clearCart();
    alert('Dziękujemy za zakup');
  };

  return (
    <Router>
      <GlobalStyle /> {/* Use GlobalStyle */}
      <Header />
      {showNotification && (
        <Notification>Produkt został dodany do koszyka</Notification>
      )}
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<ProductCatalog products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} handleOrder={handleOrder} />} />
          <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts} />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;

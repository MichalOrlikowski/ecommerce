import React from 'react';
import styled from 'styled-components';

const CatalogContainer = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;

  @media (max-width: 480px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.5em;
  margin: 0 0 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductCatalog = ({ products, addToCart }) => {
  return (
    <CatalogContainer>
      <h1>Katalog Produktów</h1>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price} PLN</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <AddToCartButton onClick={() => addToCart(product)}>Dodaj do koszyka</AddToCartButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </CatalogContainer>
  );
};

export default ProductCatalog;


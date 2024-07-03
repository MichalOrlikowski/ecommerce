
import React from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} PLN</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ProductName = styled.h1`
  font-size: 2em;
  margin: 0 0 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Ładowanie...</div>;

  return (
    <DetailContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price} PLN</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
    </DetailContainer>
  );
};

export default ProductDetail;

import React, { useState } from 'react';
import styled from 'styled-components';
import products from '../data/products.json';

const FormContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      description,
      imageUrl,
    };
    products.push(newProduct);
    setName('');
    setPrice('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <FormContainer>
      <h2>Dodaj Produkt</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nazwa Produktu</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Cena</Label>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>Opis</Label>
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label>URL Zdjęcia</Label>
          <Input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </FormGroup>
        <Button type="submit">Dodaj Produkt</Button>
      </form>
    </FormContainer>
  );
}

export default AddProduct;

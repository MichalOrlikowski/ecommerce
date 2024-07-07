import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  flex-wrap: wrap;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Sklep Internetowy</Logo>
    <Nav>
      <NavItem to="/">Strona Główna</NavItem>
      <NavItem to="/catalog">Katalog Produktów</NavItem>
      <NavItem to="/cart">Koszyk</NavItem>
      <NavItem to="/add-product">Dodaj Produkt</NavItem>
    </Nav>
  </HeaderContainer>
);

export default Header;


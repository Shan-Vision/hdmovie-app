import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  box-shadow: 8px 8px 6px #3bd9d9;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fff;
  }
`;

export const LogoTitle = styled.h1`
  background-color: #000;
  margin-left: auto;
  color: #fff;
  font-weight: 900;
  font-size: 70px;
  background: linear-gradient(0deg, #b527b5, #3bd9d9);
  text-transform: capitalize;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

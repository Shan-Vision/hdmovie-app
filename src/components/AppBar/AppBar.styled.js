import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: green;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px;
  box-shadow: 8px 8px 6px #888888;
  z-index: 1000;
  background-color: rgb(0 0 0);
  opacity: 0.8;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

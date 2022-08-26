import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  font-size: 28px;
  font-weight: 500;
  /* color: #2a2a2a; */
  background: linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: linear-gradient(to right, hsl(156 100% 36%), hsl(360 100% 45%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Header = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100vw;
  padding: 20px;
  box-shadow: 8px 8px 6px #3bd9d9;
  z-index: 1000;
  background-color: rgb(0 0 0);
  opacity: 0.8;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

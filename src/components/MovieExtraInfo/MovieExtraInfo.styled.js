import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px 15px;
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  &.active {
    color: #b527b5;
  }
  :hover:not(.active) {
    color: #3bd9d9;
  }
`;

export const Caption = styled.p`
  font-weight: 500;
  color: #fff;
`;

export const Container = styled.div`
  border-bottom: 3px solid #ccc;
  margin-bottom: 35px;
`;

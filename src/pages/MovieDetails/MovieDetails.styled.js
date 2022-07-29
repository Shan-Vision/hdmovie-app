import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 3px solid #ccc;
  margin-bottom: 15px;
`;
export const MovieInfoBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const NavItem = styled(NavLink)`

display: inline-flex;
justify-content: center;
align-items: center;
gap:3px;
font-weight: 500;

`

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 15px 0;
  border-bottom: 3px solid #ccc;
  margin-bottom: 15px;
  color: white;
`;

export const Image = styled.img`
  max-height: 500px;
  object-fit: contain;
  margin: 0;
`;
export const MovieInfoBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Overview = styled.p`
  max-width: 720px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;
export const NavItem = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-weight: 500;
  color: white;
`;

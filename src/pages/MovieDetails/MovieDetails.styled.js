import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* position: relative; */
  display: flex;
  /* width: 100%; */
  height: 800px;
  padding: 15px 0;
  border-bottom: 3px solid #ccc;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  /* z-index: 0; */
  height: 100%;
  /* width: 100%; */
  object-fit: contain;

  margin: 0;
`;
export const MovieInfoBox = styled.div`
  /* position: absolute; */
  /* top: 100px; */
  /* left: 100px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* z-index: 100; */
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
`;

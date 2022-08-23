import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 48px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;

  color: black;
  /* text-shadow: 1px 1px 3px red; */
  text-shadow: 1px 1px 2px black, 0 0 50px black, 0 0 5px violet;
`;

export const MovieCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 10px;
`;
export const MovieCard = styled.li`
  max-width: 300px;
  border-radius: 4px;
  background-color: black;
  :hover,
  :focus {
    box-shadow: grey 10px 8px 8px 5px;
  }
`;

export const Image = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const CardBox = styled.div`
  background: #2e3135;
  height: 72px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 8px;
  /* justify-content: center; */
  align-items: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CardTitle = styled.h5`
  color: #fef102;
`;
export const LinkElem = styled(NavLink)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

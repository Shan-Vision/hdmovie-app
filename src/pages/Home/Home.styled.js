import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section``;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  color: rgb(153, 156, 159);
`;

export const MovieCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 0 10px;
`;
export const MovieCard = styled.li`
  max-width: 250px;
  border-radius: 4px;
`;

export const Image = styled.img`
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const CardBox = styled.div`
  height: 36px;
  display: flex;
  align-items: baseline;
  gap: 15px;
  padding-left: 8px;
`;

export const CardTitle = styled.h5`
  color: rgb(153, 156, 159);
`;

export const LinkElem = styled(NavLink)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  :hover ${Image}, :focus ${Image} {
    box-shadow: 0 4px 4px #3bd9d9, 0 1px 6px #3bd9d9, 0 8px 8px #b527b5,
      0 16px 16px #b527b5, 8px 32px 32px #b527b5;
  }
  :hover ${CardTitle}, :focus ${CardTitle} {
    color: #3bd9d9;
  }
`;

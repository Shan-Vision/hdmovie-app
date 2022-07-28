import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
display: flex;
gap: 60px;
align-items: center;
padding: 10px 15px;
`

const NavItem = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: inherit;
  padding: 0 5px;
  border-radius: 4px;
  &.active {
    color: tomato;
  }
`;

const MovieExtraInfo = () => {
    return (
      <>
        <List>
          <li>
            <NavItem to="cast">Cast</NavItem>
          </li>
          <li>
            <NavItem to="reviews">Reviews</NavItem>
          </li>
        </List>
      </>
    );
}

export default MovieExtraInfo;
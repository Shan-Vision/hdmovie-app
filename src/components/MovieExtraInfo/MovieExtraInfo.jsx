import { List, NavItem, Caption, Container } from './MovieExtraInfo.styled';
import { MdOutlineRecentActors, MdPreview } from 'react-icons/md';

const MovieExtraInfo = () => {
  return (
    <Container>
      <Caption>Additional information</Caption>
      <List>
        <li>
          <NavItem to="cast">
            <MdOutlineRecentActors size="25px" />
            Cast
          </NavItem>
        </li>
        <li>
          <NavItem to="reviews">
            <MdPreview size="25px" />
            Reviews
          </NavItem>
        </li>
      </List>
    </Container>
  );
};

export default MovieExtraInfo;

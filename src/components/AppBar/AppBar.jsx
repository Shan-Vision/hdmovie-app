import { NavItem, Header, Navigation } from './AppBar.styled';
import { IoIosHome } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';

const AppBar = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavItem to="/">
            <IoIosHome size="20px" /> Home
          </NavItem>
          <NavItem to="movies">
            <RiMovie2Fill size="20px" />
            Movies
          </NavItem>
        </Navigation>
      </Header>
    </>
  );
};

export default AppBar;

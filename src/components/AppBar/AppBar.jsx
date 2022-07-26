import { NavItem, Header, Navigation, LogoTitle } from './AppBar.styled';
import { IoIosHome } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';

const AppBar = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavItem to="/">
            <IoIosHome size="24px" /> Home
          </NavItem>
          <NavItem to="movies">
            <RiMovie2Fill size="24px" />
            Movies
          </NavItem>
        </Navigation>
        <LogoTitle>HDMovie App</LogoTitle>
      </Header>
    </>
  );
};

export default AppBar;

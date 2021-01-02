import React, {useState} from 'react';
import * as Styled from './styled';
import GlobalStyles from '../../../styles/Global';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <Styled.HeaderContainer>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <GlobalStyles />
      </Styled.HeaderContainer>
    </>
  );
};

export default Header;

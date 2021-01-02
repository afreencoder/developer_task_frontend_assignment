import React from 'react';
import * as Styled from './styled';
import {useSpring, config} from 'react-spring';
import {Link} from 'react-router-dom';

import Brand from './Brand';
import Hamburgermenu from './HamburgerMenu';
import CollapseMenu from './CollapseMenu';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: {transform: 'translate3d(0, -10rem, 0)'},
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: {transform: 'translate3d(0, 30px, 0)', opacity: 0},
    to: {transform: 'translate3d(0, 0, 0)', opacity: 1},
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <Styled.NavBar style={barAnimation}>
        <Styled.FlexContainer>
          <Brand />
          <Styled.NavLinks style={linkAnimation}>
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/transporters">Transporters</Link>
            </li>
            <li>
              <Link to="/">
                {' '}
                <i className="user-icon fa fa-user-o" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                {' '}
                <i className="user-action fa fa-chevron-down" aria-hidden="true"></i>
              </Link>
            </li>
          </Styled.NavLinks>
          <Styled.HamburgerWrapper>
            <Hamburgermenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
          </Styled.HamburgerWrapper>
        </Styled.FlexContainer>
      </Styled.NavBar>
      <CollapseMenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
    </>
  );
};

export default Navbar;


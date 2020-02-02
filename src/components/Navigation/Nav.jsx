import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../store/context/themeContext';
import { NavStyled } from './navStyled';

const Nav = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <NavStyled theme={theme}>
      <NavLink
        activeClassName="active"
        exact
        to="/"
      >
        Carousel
      </NavLink>
      <button onClick={updateTheme}>Change theme</button>
    </NavStyled>
  );
};

export default Nav;

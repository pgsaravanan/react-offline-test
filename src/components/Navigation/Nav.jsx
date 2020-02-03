import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../store/context/themeContext';
import { NavStyled } from './navStyled';

const Nav = () => {
  const [theme, setTheme] = useState('light');
  const updateTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  // const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <ThemeContext.Provider>
      <NavStyled theme={theme}>
        <NavLink
          activeClassName="active"
          exact
          to="/"
        >
          Generation Details
        </NavLink>
        <button onClick={updateTheme}>Change theme</button>
      </NavStyled>
    </ThemeContext.Provider>
  );
};

export default Nav;

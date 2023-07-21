import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &.active {
    color: green;
  }
`;

const Navigation = () => {
  return (
    <>
      <div className={css.navigation}>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;

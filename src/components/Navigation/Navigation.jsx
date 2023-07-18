import React from 'react';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;

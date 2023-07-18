import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>Sorry we couldn't find that page...</div>
      <Link to="/">Back to Home Page</Link>
    </>
  );
};

export default NotFound;

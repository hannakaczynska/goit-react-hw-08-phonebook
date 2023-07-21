import React from 'react';
import { Link } from 'react-router-dom';
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <>
      <div className={css.info}>
        <div className={css.text}>Sorry we couldn't find that page...</div>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default NotFound;

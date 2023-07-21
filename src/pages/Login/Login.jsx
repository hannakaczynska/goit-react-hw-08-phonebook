import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { TextField } from '@mui/material';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        type="email"
        name="email"
        label="E-mail"
        variant="outlined"
        size="small"
        required
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        size="small"
        required
      />
      <Button
        variant="contained"
        size="small"
        endIcon={<AccountCircleRoundedIcon />}
        type="submit"
        color="success"
      >
        Log In
      </Button>
    </form>
  );
};

export default Login;

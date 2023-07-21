import React from 'react';
import Button from '@mui/material/Button';
import { SendRounded } from "@mui/icons-material";
import { TextField } from '@mui/material';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from './Register.module.css';


const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    ))
    
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField type="text" name="name" label="Name" variant="outlined" size="small" required/>
      <TextField type="email" name="email" label="E-mail" variant="outlined" size="small" required/>
      <TextField type="password" name="password" label="Password" variant="outlined" size="small" required/>
      <Button variant="contained" size="small" endIcon={<SendRounded />} type="submit" color="success">Register</Button>
    </form>
  );
};

export default Register;

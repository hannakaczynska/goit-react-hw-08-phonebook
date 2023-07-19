import React from 'react';
import Button from '@mui/material/Button';
import { SendRounded } from "@mui/icons-material"
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';


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
    <form onSubmit={handleSubmit}>
      <label> Name
        <input name="name" type="text"></input>
      </label>
      <label> E-mail
        <input name="email" type="email"></input>
      </label>
      <label> Password
        <input name="password" type="password"></input>
      </label>
      <Button variant="contained" size="medium" endIcon={<SendRounded />} type="submit">Register</Button>
    </form>
  );
};

export default Register;

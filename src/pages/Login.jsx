import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }));
    form.reset()
  };

  return (
        <form onSubmit={handleSubmit}>
      <label> E-mail
        <input name="email" type="email"></input>
      </label>
      <label> Password
        <input name="password" type="password"></input>
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
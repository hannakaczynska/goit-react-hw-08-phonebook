import React from 'react';

const Register = () => {
  return (
    <form>
      <label> Name
        <input type="text"></input>
      </label>
      <label> E-mail
        <input type="text"></input>
      </label>
      <label> Password
        <input type="text"></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default Register;

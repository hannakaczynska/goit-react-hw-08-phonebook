import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser);

  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;

import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(logOut());
}
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={handleClick}>Logout</button>
    </div>
  );
};

export default UserMenu;

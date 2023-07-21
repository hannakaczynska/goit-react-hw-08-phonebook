import React from 'react';
import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  
  const handleClick = e => {
    dispatch(logOut());
  };
  return (
    <div className={css.usermenu}>
      <p>{email}</p>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={handleClick}
        endIcon={<LogoutRoundedIcon/>}
        color="success"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;

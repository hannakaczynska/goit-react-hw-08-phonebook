import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
      
  );
};

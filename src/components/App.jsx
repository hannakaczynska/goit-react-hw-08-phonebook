import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
      <Routes>
        <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
</Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

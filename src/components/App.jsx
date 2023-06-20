import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuthHook';
import Spinner from "../utils/Spinner";
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefreshing
      ? <Spinner />
      : <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={
            <RestrictedRoute redirectTo='/contacts' component={<Register />} />} />
          <Route path="login" element={
            <RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
          <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    

    // <Container>
    //   <Suspense fallback={<Spinner />}>
    //     <AppBar />
    //     {isRefreshing
    //       ? <Spinner />
    //       : <Routes>
    //           <Route index path="/" element={<Home />} />
    //         <Route path="register" element={
    //           <RestrictedRoute redirectTo='/contacts' component={<Register />} />} />
    //         <Route path="login" element={
    //           <RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
    //         <Route path="contacts" element={
    //           <PrivateRoute redirectTo="/login" component={<Contacts />} />} />
    //           <Route path='/*' element={<NotFound />} />
    //       </Routes>}
    //   </Suspense>
    // </Container>
  );
};
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import Header from '../components/Header';

const DefaultLayout = () => {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to='/login' />;
  }
  return (
    <div className='w-full flex content-between items-center'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;

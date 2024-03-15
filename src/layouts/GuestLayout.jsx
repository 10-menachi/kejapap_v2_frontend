import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to='/' />;
  }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;

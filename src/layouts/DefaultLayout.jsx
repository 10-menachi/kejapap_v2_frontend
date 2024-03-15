import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import Header from '../components/Header';
import Banner from '../components/Banner';

const DefaultLayout = () => {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to='/login' />;
  }
  return (
    <div className='w-full flex content-between items-center min-h-screen flex-col gap-6 justify-start bg-gray-50 relative'>
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;

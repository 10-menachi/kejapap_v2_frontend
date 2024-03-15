import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../utils/axios-client';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosClient
      .post('/login', payload)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.token);
      })
      .catch((error) => {
        const res = error.response;
        if (res && res.status === 422) {
          console.log(res.data.errors);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='p-4 w-full flex flex-col items-start justify-center gap-4'
    >
      <h3 className='font-bold text-lg'>Login</h3>
      <div className='grid grid-cols-1 gap-4 w-full border-solid border-2 p-8'>
        <div className='flex flex-col gap-1 w-[90%]'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            ref={emailRef}
            className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
          />
        </div>
        <div className='flex flex-col gap-1 w-[90%]'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
          />
        </div>
        <input
          type='submit'
          id='submit'
          className='my-2 h-10 w-fit px-10 bg-[#3E2093] text-white rounded-2xl'
          value='Submit'
        />

        <div>
          Don't Have an account ? Register as
          <div className='flex justify-between m-5'>
            <Link to='/signup/tenant' className='font-semibold text-[#3E2093]'>
              {' '}
              Tenant
            </Link>
            <Link
              to='/signup/landlord'
              className='font-semibold text-[#3E2093]'
            >
              {' '}
              Landlord
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

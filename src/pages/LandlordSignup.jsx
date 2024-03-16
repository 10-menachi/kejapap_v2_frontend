import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../utils/axios-client';

const LandlordSignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      role: 'landlord',
    };

    axiosClient
      .post('/signup', payload)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        setToken(response.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div className='relative'>
      <form
        onSubmit={handleSubmit}
        className='p-4 flex flex-col items-start justify-center gap-4 w-full rounded-lg bg-white'
      >
        <h3 className='text-lg font-bold'>Landlord Registration</h3>
        <div className='grid md:grid-cols-1 gap-4 w-full border-solid border-2 p-8'>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='fname'>First Name</label>
            <input
              type='text'
              id='fname'
              ref={firstNameRef}
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              id='lname'
              ref={lastNameRef}
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='email'>Mail</label>
            <input
              type='email'
              id='email'
              ref={emailRef}
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              ref={usernameRef}
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
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='password_confirmation'>Confirm Password</label>
            <input
              type='password'
              id='password_confirmation'
              ref={passwordConfirmationRef}
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
        </div>
        <input
          type='submit'
          id='submit'
          className='my-2 h-10 w-[16] px-10 bg-[#3E2093] text-white rounded-2xl'
          value='Submit'
        />

        <p>
          Already have an account?
          <Link className='font-semibold text-[#3E2093] mx-5' to='/login'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LandlordSignUp;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const LandlordSignUp = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { setUser, setToken } = useStateContext();
  const [error, setError] = useState(null);
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
        setUser(response.data.user);
        setToken(response.data.token);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className='relative'>
      (error &&{' '}
      <div
        class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
        role='alert'
      >
        <strong class='font-bold'>Holy smokes!</strong>
        <span class='block sm:inline'>{error}</span>
        <span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
          <svg
            class='fill-current h-6 w-6 text-red-500'
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </span>
      </div>
      )
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
              name='fname'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              name='lname'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='mail'>Mail</label>
            <input
              type='email'
              name='email'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
          <div className='flex flex-col gap-1 w-[90%]'>
            <label htmlFor='password_confirmation'>Confirm Password</label>
            <input
              type='password_confirmation'
              name='password_confirmation'
              className='border-b-2 p-2 focus-none outline-none text-gray-600 border-gray-400'
            />
          </div>
        </div>
        <input
          type='submit'
          name='submit'
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

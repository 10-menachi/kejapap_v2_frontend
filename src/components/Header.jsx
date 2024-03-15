import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../utils/axios-client';

const Header = () => {
  const { currentUser } = useStateContext();
  const onLogout = () => {
    axiosClient.post();
  };
  return (
    <nav className='p-4 flex items-center justify-between flex-wrap gap-2 w-full bg-white border-b border-gray-200'>
      <div className='flex items-center gap-6 flex-wrap w-fit'>
        <span className='flex gap-1 items-center mr-8'>
          <p className='font-bold text-xl text-[#3E2093] hidden md:flex flex-col'>
            <span>KejaPap</span>
            <span className='w-12 h-2 border-b-4 border-[#3E2093]'></span>
          </p>
          <span className='text-[#3E2093]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819'
              />
            </svg>
          </span>
        </span>
        <Link
          to='/'
          className='font-semibold text-gray-700 hover:text-[#3E2093] hover:font-bold cursor-pointer'
        >
          Home
        </Link>
        <Link
          to='/about'
          className='font-semibold text-gray-700 hover:text-[#3E2093] hover:font-bold cursor-pointer'
        >
          About
        </Link>
        <Link
          to='/contact'
          className='font-semibold text-gray-700 hover:text-[#3E2093] hover:font-bold cursor-pointer'
        >
          Feed Back
        </Link>
        {currentUser.role === 'admin' && (
          <select
            name='house_type'
            id='selectLocation'
            className='p-1 rounded-lg focus-none outline-none bg-white font-semibold text-gray-700 hover:text-[#3E2093]'
          >
            <option value=''>Admin</option>
            <option value='/landlords'>Landlords</option>
            <option value='/tenants'>Tenants</option>
            <option value='/properties'>Properties</option>
          </select>
        )}
      </div>
      <div className='flex gap-2 items-center md:mx-2'>
        <p className='text-gray-700 font-semibold hover:text-[#3E2093] cursor-pointer m-5'>
          {currentUser.name}
        </p>
        <Link
          onClick={onLogout}
          className='border px-4 py-2 h-fit rounded-md bg-violet-800 text-white hover:bg-violet-900 flex items-center gap-1 font-semibold'
        >
          <span>Log Out</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

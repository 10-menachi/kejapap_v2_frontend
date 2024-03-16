import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import Dashboard from './pages/Dashboard';
import ErrorComponent from './components/ErrorComponent';
import Login from './pages/Login';
import Users from './pages/Users';
import TenantSignUp from './pages/TenantSignUp';
import LandlordSignup from './pages/LandlordSignup';
import Tenants from './pages/Tenants';
import Landlords from './pages/Landlords';
import Properties from './pages/Properties';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Navigate to={'/dashboard'} />} />
          <Route path='users' element={<Users />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='tenants' element={<Tenants />} />
          <Route path='landlords' element={<Landlords />} />
          <Route path='properties' element={<Properties />} />
        </Route>
        <Route path='*' element={<ErrorComponent />} />
        <Route path='/login' element={<GuestLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path='/signup' element={<GuestLayout />}>
          <Route path='tenant' element={<TenantSignUp />} />
          <Route path='landlord' element={<LandlordSignup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

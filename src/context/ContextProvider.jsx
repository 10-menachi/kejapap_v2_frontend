import { createContext, useContext, useState } from 'react';

const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(localStorage.getItem('user'));
  const [token, _setToken] = useState(localStorage.getItem('token'));

  const setToken = (_token) => {
    _setToken(_token);
    if (_token) {
      localStorage.setItem('token', _token);
    } else {
      localStorage.removeItem('token');
    }
  };

  const setUser = (_user) => {
    _setUser(_user);
    if (_user) {
      localStorage.setItem('user', _user);
    } else {
      localStorage.removeItem('user');
    }
  };
  return (
    <StateContext.Provider
      value={{
        currentUser: user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateContext;

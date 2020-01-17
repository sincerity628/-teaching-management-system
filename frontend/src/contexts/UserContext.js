import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem('user'));

  const login = (user) => {
    setUser(JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    history.push('/signin');
  };

  return (
    <UserContext.Provider value={{ user: JSON.parse(user), login, logout }}>
      { props.children }
    </UserContext.Provider>
  );
};

export default UserContextProvider;

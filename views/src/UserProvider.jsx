// UserProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import Cookies from 'js-cookie';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('jwt');

    if (token) {
      axios.get('http://localhost:8080/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
